module.exports = function(pool) {
	function update(query, data, callback) {

		pool.getConnection(function(err, connection) {
			if (err) {
				callback(err, null);
			} else {
				connection.query(query, data, function(err, rows) {
					connection.end(function(err){
						console.log('closed connection');
						if(err){
							console.log('Connection Not Being Closed');
						}
					});
					if (err) {
						callback(err, null);
					} else {
						callback(null, rows.affectedRows);
					}
				});
			}
		});
	}

	function insertAndReturnKey(query,data, callback) {
		pool.getConnection(function(err, connection) {
			if (err) {
				callback(err, null);
			} else {

				connection.query(query, data, function(err, rows) {
					connection.end(function(err){
						console.log('closed connection');
						if(err){
							console.log('Connection Not Being Closed');
						}
					});
					if (err) {
						callback(err, null);
					} else {
						callback(null, rows.insertId);
					}
				});
			}
		});
	}

	function queryForAll(query,data, callback) {
		pool.getConnection(function(err, connection) {
			if (err) {
				callback(err, null);
			} else {
				connection.query(query, data, function(err, rows) {
					connection.end(function(err){
						console.log('closed connection');
						if(err){
							console.log('Connection Not Being Closed');
						}
					});
					if (err) {
						callback(err, null);
					} else {
						callback(null, rows);
					}
				});
			}
		});
	}

	function queryForObject(query,data, callback) {
		pool.getConnection(function(err, connection) {
			if (err) {
				callback(err, null);
			} else {
				connection.query(query, data, function(err, rows) {
					connection.end(function(err){
						console.log('closed connection');
						if(err){
							console.log('Connection Not Being Closed');
						}
					});
					if (err) {
						callback(err, null);
					} else {
						callback(null, rows);
					}
				});
			}
		});
	}

	return {
		update : update,
		insertAndReturnKey : insertAndReturnKey,
		queryForAll : queryForAll,
		queryForObject : queryForObject
	};
};



