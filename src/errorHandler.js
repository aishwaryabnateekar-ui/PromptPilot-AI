export function formatAPIError(provider, error, status = 500) {
  console.error(`[${provider} Error]`, error);

  return {
    success: false,
    provider,
    status,
    message: error?.message || 'Unknown error occurred',
    timestamp: new Date().toISOString(),
  };
}

export function safeJSONParse(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error('[JSON Parse Error]', error);

    return null;
  }
}
