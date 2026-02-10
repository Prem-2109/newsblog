// Vercel Serverless Function to proxy News API requests
// This bypasses CORS restrictions by making the request server-side

export default async function handler(req, res) {
    // Enable CORS for your frontend
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { category = '' } = req.query;

        // Get API key from environment variable
        const apiKey = process.env.VITE_API_KEY || '54ae918a34c1421a9072ef9bf6e4d938';

        // Build News API URL
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

        // Fetch from News API
        const response = await fetch(url);
        const data = await response.json();

        // Check if News API returned an error
        if (data.status === 'error') {
            return res.status(400).json({
                error: data.message || 'Failed to fetch news',
                code: data.code
            });
        }

        // Return the articles
        return res.status(200).json(data);

    } catch (error) {
        console.error('Error fetching news:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
}
