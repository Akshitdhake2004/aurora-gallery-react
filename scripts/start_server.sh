#!/bin/bash
cd /home/ec2-user/app

# Ensure pm2 is installed globally
sudo npm install -g pm2

# Kill existing pm2 processes (ignore errors if none)
pm2 delete all || true

# Serve the app using pm2
pm2 serve dist 8080 --spa --name aurora-gallery
