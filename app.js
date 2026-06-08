// CONFIGURATION: Replace this with your actual KakaoTalk Open Chat link
const KAKAO_OPEN_CHAT_URL = "https://open.kakao.com/o/sI4KhIyi";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Set KakaoTalk Link Dynamically
  const kakaoLinks = document.querySelectorAll(".kakao-link");
  kakaoLinks.forEach(link => {
    // Only update if it contains the placeholder so it doesn't overwrite if manually set in HTML
    if (link.getAttribute("href") === "https://open.kakao.com/o/sXXXXXXXX") {
      link.setAttribute("href", KAKAO_OPEN_CHAT_URL);
    }
  });

  // 2. Header Style change on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "10px 0";
      header.style.background = "rgba(11, 15, 25, 0.9)";
      header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    } else {
      header.style.padding = "0";
      header.style.background = "rgba(11, 15, 25, 0.7)";
      header.style.boxShadow = "none";
    }
  });

  // 3. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll(".faq-item");
  
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-answer").style.maxHeight = null;
        }
      });
      
      // Toggle current FAQ item
      if (isActive) {
        item.classList.remove("active");
        answer.style.maxHeight = null;
      } else {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // 4. Scroll Reveal Animations (Fade-in on scroll)
  const revealElements = document.querySelectorAll(".reveal");
  
  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      
      if (elTop < triggerBottom) {
        el.classList.add("active");
      }
    });
  };
  
  window.addEventListener("scroll", revealOnScroll);
  // Trigger once initially to show elements already in view
  revealOnScroll();
});
