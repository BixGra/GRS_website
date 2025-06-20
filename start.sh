echo "docker build . -t grs"

docker build . -t grs

echo "docker compose up -d --remove-orphans"

docker compose up -d --remove-orphans

echo "docker image prune -a"

docker image prune -a