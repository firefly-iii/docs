# Kubernetes

In the `.deploy/kubernetes` directory of Firefly III (also available [on GitHub](https://github.com/firefly-iii/kubernetes)) you will find three YAML files that denote a pretty standard service offering for both Firefly III and an accompanying MySQL database.

_Take care!_

It's only Firefly III version 4.8.2 and up that will work with the instructions below. If you're running an earlier version of Firefly III you may run into database access issues.

## Download and configuration

Download all three files from GitHub (if necessary). Open `kustomization.yaml` and make sure to change both the `db_password` and the `app_key`. It's important to know that the `app_key` must be 32 characters in length **exactly**.

## Launch

If you have no special configuration things to keep in mind it's enough to launch with a simple:

```text
cd firefly-iii/.deploy/kubernetes
kubectl apply -k ./
```

The output should be something like this:

```text
secret/firefly-iii-secrets-g4c4tkm4tt created
service/firefly-iii-mysql created
service/firefly-iii created
deployment.apps/firefly-iii-mysql created
deployment.apps/firefly-iii created
persistentvolumeclaim/firefly-iii-export-claim created
persistentvolumeclaim/firefly-iii-upload-claim created
persistentvolumeclaim/mysql-pv-claim created
```

## Advanced

It doesn't get more advanced than this. You can change any aspect of the Service, the number of pods or anything else as you see fit.

