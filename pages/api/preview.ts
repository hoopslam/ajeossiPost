import type { NextApiRequest, NextApiResponse } from 'next';

export default function preview(req: NextApiRequest, res: NextApiResponse) {
    //Setting previewData to empty object for now so not falsey
    res.setPreviewData({}); //TODO: Set Token for Auth in Future
    res.writeHead(307, { Location: '/' });
    res.end();
}
