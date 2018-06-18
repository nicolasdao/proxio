module.exports = (ctx, req, res) => { 
	const { headers={} } = ctx
	const ip = headers['x-forwarded-for'] || 'unknown'

	res.writeHead(200, { 'Content-Type': 'application/json '})
	res.end(JSON.stringify(Object.assign({ ip }, headers), null, '  '))
}