#!/bin/sh


# Kill processes on ports 3000 and 5000 if they exist


# Paths
frontend_path="frontend"
backend_path="backend"
backend_static_path="$backend_path/static"

rm -rf $backend_path/dist $backend_path/build

# Build frontend
cd $frontend_path
npm run build
cd ..

# Copy frontend build to backend
rm -rf $backend_static_path
mkdir -p $backend_static_path
cp -r $frontend_path/build/* $backend_static_path

# Build backend
cd $backend_path
rm -rf dist build
# pyinstaller --onefile --add-data "static:static" --specpath . app.spec
pyinstaller app.spec

kill -9 $(lsof -t -i :3000)
kill -9 $(lsof -t -i :5000)

cd dist
./app