echo ==================================== STARTING RESTORE ====================================

mongorestore --db off /docker-entrypoint-initdb.d/products.bson

echo ==================================== RESTORE COMPLETE ====================================