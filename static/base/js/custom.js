const translations = {
    en: {
      title: 'NAME',
      head: 'NAME LOGO',
      news: 'NEWS',
      sports: 'SPORTS',
      blogs: 'BLOGS',
      tech: 'TECH',
      life: 'LIFE',
      opinion: 'OPINION',
    },
    np: {
      title: 'नाम',
      head: 'नाम लोगो',
      news: 'समाचार',
      sports: 'खेलकुद',
      blogs: 'ब्लगहरू',
      tech: 'प्रविधि',
      life: 'जीवन',
      opinion: 'प्रतिक्रिया',
    },
    // Add more languages as needed
  };
  
  let currentLanguage = localStorage.getItem('selectedLanguage') || 'np';
  
  function setLanguage(language) {
    if (translations[language]) {
      currentLanguage = language;
      localStorage.setItem('selectedLanguage', language); // Store selected language in localStorage
      updateContent();
    } else {
      console.error(`Language '${language}' not supported.`);
    }
  }
  
  function updateContent() {
    // Update title and head-logo
    document.getElementById('title').textContent = translations[currentLanguage].title;
    document.getElementById('head-logo').textContent = translations[currentLanguage].head;
  
    // Update other elements with data-translate attribute
    const elementsToUpdate = document.querySelectorAll('[data-translate]');
  
    elementsToUpdate.forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = translations[currentLanguage][key] || '';
    });
  }
  
  // Initial content update
  updateContent();
  