#!/bin/bash

docker build -f ./deployment/docker/Dockerfile -t roman_numerals . && docker run -p 0.0.0.0:5000:8080  -d roman_numerals 