### Inara CV website

## How add to swarm

Make sure that overlay network is created

```
docker network create \
	--driver overlay \
	internal-network
```

Deploy the service

```
docker service create \
	--name inara-cv \
	--publish 8500:80 \
	--constraint 'node.role == worker' \
	--network internal-network \
	registry.dbogatov.org/dbogatov/inara-cv
```
