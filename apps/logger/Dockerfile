FROM public.ecr.aws/x7k6h4v4/node20-alpine:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app


RUN npm install
RUN npx nx run logger:build --verbose

WORKDIR /app/logger

RUN cp -r /app/dist/apps/logger .
RUN cp -r /app/node_modules .



# # Run the command inside your image filesystem.
# # RUN npm install

# ENV PORT 80
# EXPOSE 80

CMD ["node", "logger/main.js"]
