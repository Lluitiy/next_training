export default function handler(req, res) {
	res.setPreviewData(data, {
		maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
		path: "/about", // The preview mode cookies apply to paths with /about
	});
	res.end("Preview mode enabled");
}
