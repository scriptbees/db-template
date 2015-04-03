module.exports = function(pool) {
	function update(query, data, callback) {

		pool.getConnection(function(err, connection) {
			if (err) {
				callback(err, null);
			} else {
				connection.query(query, data, function(err, rows) {
					if (err) {
						callback(err, null);
					} else {
						callback(null, rows.affectedRows);
					}
					connection.release();
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
					if (err) {
						callback(err, null);
					} else {
						callback(null, rows.insertId);
					}
					connection.release();
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
					if (err) {
						callback(err, null);
					} else {
						callback(null, rows);
					}
					connection.release();
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
					if (err) {
						callback(err, null);
					} else {
						callback(null, rows);
					}
					connection.release();
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



