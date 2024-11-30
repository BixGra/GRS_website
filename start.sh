echo "docker build . -t grswebsitehost"

docker build . -t grswebsitehost

echo "docker compose up -d --remove-orphans"

docker compose up -d --remove-orphans

echo "docker image prune -a"

docker image prune -a