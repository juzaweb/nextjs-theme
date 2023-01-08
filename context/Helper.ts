function is_url(url: string): boolean {
  let data;
  try {
    data = new URL(url);
  } catch (_) {
    return false;
  }
  return data.protocol === "http:" || data.protocol === "https:";
}

export function __(key: string): string {
    return key;
}

export function upload_url(path?: string): string {
  if (!path) {
    return '';
  }

  if (is_url(path)) {
      return path;
  }

  return path;
}
