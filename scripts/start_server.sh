#!/bin/bash
cd /home/ec2-user/app

# Install PM2 globally (if not already)
sudo npm install -g pm2

# Restart app with PM2
pm2 delete all || true
pm2 serve dist 8080 --spa --name aurora-gallery
