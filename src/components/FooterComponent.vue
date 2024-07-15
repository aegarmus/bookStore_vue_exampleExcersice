
<template>
    <footer class="footer">
      <div class="footer__logo">
        <img src="/img/icon/icon.png" alt="Vue Books Store Logo">
      </div>
      <div class="footer__social">
        <a href="https://instagram.com" target="_blank" class="footer__icon">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" class="footer__icon">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" class="footer__icon">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="mailto:info@vuebooksstore.com" target="_blank" class="footer__icon">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <p class="footer__text">© 2024 Vue Books Store. Todos los derechos reservados.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    background-color: var(--primary-color700);
    color: var(--neutral-color-light200);

    position: absolute;
    bottom: 0;

    width: 100%;

  }
  
  .footer__logo img {
    width: 100px;
    height: auto;
    margin-bottom: 1rem;
  }
  
  .footer__social {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .footer__icon {
    color: var(--neutral-color-light200);
    font-size: 1.5rem;
    transition: color 0.3s;
  }
  
  .footer__icon:hover {
    color: var(--secondary-color500);
  }
  
  .footer__text {
    font-size: 0.875rem;
    text-align: center;
  }
  </style>
  