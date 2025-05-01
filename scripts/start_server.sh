#!/bin/bash
cd /home/ec2-user/app

# Source the NVM script
source /home/ec2-user/.nvm/nvm.sh

# Use Node.js version 22 for runtime
nvm use 22

# Delete all pm2 processes, ignore errors if no processes exist
pm2 delete all || true

# Serve the application using pm2
pm2 serve dist 8080 --spa --name aurora-gallery
