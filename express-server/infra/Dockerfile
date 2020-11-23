FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Copy app source into image
COPY . .

EXPOSE 8080

HEALTHCHECK --interval=5s --timeout=2s --retries=5 CMD ["healthcheck.sh"]

CMD [ "npm", "start" ]
