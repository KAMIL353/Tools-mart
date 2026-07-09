import http.server
import socketserver
import json
import os
import urllib.parse

PORT = 8000
DB_FILE = 'products.json'

class DatabaseHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for local testing/cross-origin requests if needed
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        # Handle preflight CORS requests
        self.send_response(200, "OK")
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/products':
            if os.path.exists(DB_FILE):
                try:
                    with open(DB_FILE, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                    response = json.dumps(data)
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(response.encode('utf-8'))
                    return
                except Exception as e:
                    self.send_error(500, f"Error reading database: {str(e)}")
                    return
            else:
                # Database file doesn't exist yet, tell client to initialize
                response = json.dumps({"initialized": False})
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(response.encode('utf-8'))
                return
        
        # Default handler for static files
        super().do_GET()

    def do_POST(self):
        if self.path == '/api/products/initialize':
            # Initialize database with default catalog data sent from frontend
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            try:
                catalog = json.loads(post_data.decode('utf-8'))
                with open(DB_FILE, 'w', encoding='utf-8') as f:
                    json.dump(catalog, f, indent=4, ensure_ascii=False)
                
                response = json.dumps({"success": True, "message": "Database initialized"})
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(response.encode('utf-8'))
            except Exception as e:
                self.send_error(400, f"Invalid JSON payload: {str(e)}")
            return

        elif self.path == '/api/products':
            # Add new product
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            try:
                new_product = json.loads(post_data.decode('utf-8'))
                
                catalog = []
                if os.path.exists(DB_FILE):
                    with open(DB_FILE, 'r', encoding='utf-8') as f:
                        catalog = json.load(f)
                
                catalog.append(new_product)
                
                with open(DB_FILE, 'w', encoding='utf-8') as f:
                    json.dump(catalog, f, indent=4, ensure_ascii=False)
                
                response = json.dumps({"success": True, "product": new_product})
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(response.encode('utf-8'))
            except Exception as e:
                self.send_error(400, f"Error saving product: {str(e)}")
            return

        elif self.path == '/api/products/delete':
            # Delete a product by ID
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            try:
                payload = json.loads(post_data.decode('utf-8'))
                prod_id = payload.get('id')
                
                if not prod_id:
                    self.send_error(400, "Product ID missing")
                    return
                
                catalog = []
                if os.path.exists(DB_FILE):
                    with open(DB_FILE, 'r', encoding='utf-8') as f:
                        catalog = json.load(f)
                
                # Filter out the deleted item
                original_len = len(catalog)
                catalog = [item for item in catalog if str(item.get('id')) != str(prod_id)]
                
                with open(DB_FILE, 'w', encoding='utf-8') as f:
                    json.dump(catalog, f, indent=4, ensure_ascii=False)
                
                response = json.dumps({
                    "success": True, 
                    "message": "Product deleted", 
                    "deleted": original_len > len(catalog)
                })
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(response.encode('utf-8'))
            except Exception as e:
                self.send_error(400, f"Error deleting product: {str(e)}")
            return
            
        else:
            self.send_error(404, "API endpoint not found")

# Avoid "Address already in use" errors during quick restarts
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), DatabaseHTTPRequestHandler) as httpd:
    print(f"Full-stack Database Live Server running at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
