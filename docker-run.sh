#!/usr/bin/env bash
docker run -d --rm  --name web-server -p 80:80  -v /Users/mauget/WebstormProjects/react-json-schema-form-demo/build:/usr/share/nginx/html nginx

# To open a CLI on the container:
# docker exec -it web-server bash
