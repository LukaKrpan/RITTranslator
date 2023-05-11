import axios from 'axios';

const API_KEY = '9b80c86c-744f-b0c2-595d-93b4f240758e:fx';
const BASE_URL = 'https://api-free.deepl.com/v2/translate';

export const translateText = async (text, sourceLang, targetLang) => {
  try {
    const formData = new FormData();
    formData.append('auth_key', API_KEY);
    formData.append('source_lang', sourceLang);
    formData.append('target_lang', targetLang);
    formData.append('text', text);

    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData) {
        const translatedText = responseData.translations[0].text;
        return translatedText;
      }
    }
  } catch (error) {
    console.log(
      'Error occurred while fetching data from the API: ',
      error.message
    );
    throw error;
  }
};
