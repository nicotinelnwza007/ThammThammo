

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Byn5NYQl.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CX87mN_u.js","_app/immutable/chunks/entry.BEyTsc5e.js"];
export const stylesheets = [];
export const fonts = [];
