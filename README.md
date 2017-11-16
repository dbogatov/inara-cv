### Inara CV website

## How add to swarm

Make sure that overlay network is created

Deploy the service

```
docker service create \
	--name inara-cv \
	--constraint 'node.role == worker' \
	--network internal-network \
	registry.dbogatov.org/dbogatov/inara-cv
```
