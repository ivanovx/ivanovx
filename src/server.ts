import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine';

import bootstrap from './main.server';

const commonEngine = new CommonEngine({
    bootstrap,
});

export async function netlifyCommonEngineHandler(request: Request, context: any): Promise<Response> {
    console.log(context);

    return await render(commonEngine);
}
