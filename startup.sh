#!/bin/sh

sudo docker-compose up -d

npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
