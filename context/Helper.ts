function is_url(url: string) {
    let data;
    try {
      data = new URL(url);
    } catch (_) {
      return false;
    }
    return data.protocol === "http:" || data.protocol === "https:";
}

export function __(key: string) {
    return key;
}

export function upload_url(path: string) {
    if (is_url(path)) {
        return path;
    }

    return path;
}
