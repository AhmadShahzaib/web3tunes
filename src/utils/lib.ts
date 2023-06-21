/* eslint-disable no-console */
export const injectScript = async (src: string) => {
  const script = document.createElement('script');

  script.src = src;
  script.async = true;

  document.body.appendChild(script);
};
export const scriptPromise = async (url: string) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    document.body.appendChild(script);
    script.onload = resolve;
    script.onerror = reject;
    script.async = true;
    script.src = url;
  });
export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const getIPFSUrl = (ipfs: string) =>
  `https://ipfs.io/ipfs/${String(ipfs).split('//')[1]}`;

export const callApi = async (
  url = '',
  method = 'POST',
  data = {},
  headers = {}
) => {
  try {
    const apiBaseUrl = ``;
    const defaultHeaders: any = {
      // 'Content-Type': 'application/json',
      Accept: 'application/json',
      // Accept: '*/*',
    };
    const parsedData: any = JSON.stringify(data);

    defaultHeaders['Content-Type'] = 'application/json';
    // defaultHeaders['Access-Control-Allow-Credentials'] = '["true"]';

    // const userData = getUserLocalData();

    // if (auth && userData.accessToken) {
    //   defaultHeaders.Authorization = `Bearer ${userData.accessToken}`;
    // }

    // Default options are marked with *
    const response = await fetch(`${apiBaseUrl}${url}`, {
      method, // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: { ...defaultHeaders, ...headers },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: method === 'GET' ? undefined : parsedData, // body data type must match "Content-Type" header
    });
    console.log(response.body);

    return await response.json();
  } catch (error) {
    console.error(error);
    return {} as any;
  } // parses JSON response into native JavaScript objects
};
