document.addEventListener("DOMContentLoaded", function () {
  const openPopupBtn = document.querySelector(".open-popup-btn");
  const closePopupBtn = document.querySelector(".close-popup-btn");
  const addItemButton = document.getElementById("addItemButton");
  const fileInput = document.getElementById("imageInput");
  const priceInput = document.getElementById("priceInput");
  const itemsContainer = document.getElementById("itemsContainer");
  const popupOverlay = document.getElementById("popupOverlay");

  // Load saved items from localStorage
  loadItemsFromLocalStorage();

  openPopupBtn.addEventListener("click", function () {
    popupOverlay.style.display = "flex";
  });

  closePopupBtn.addEventListener("click", function () {
    popupOverlay.style.display = "none";
  });

  addItemButton.addEventListener("click", function () {
    const file = fileInput.files[0];
    const price = priceInput.value.trim();

    if (file && price) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const item = {
          id: Date.now().toString(), // Unique ID for each item
          image: e.target.result,
          price: price,
        };

        // Add item to the container
        addItemToContainer(item);

        // Save item to localStorage
        saveItemToLocalStorage(item);

        // Clear inputs after adding item
        fileInput.value = "";
        priceInput.value = "";
        popupOverlay.style.display = "none";
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please select an image and enter a price.");
    }
  });

  function addItemToContainer(item) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.setAttribute("data-id", item.id);

    const img = document.createElement("img");
    img.src = item.image;

    const priceText = document.createElement("p");
    priceText.className = "price-text";
    priceText.textContent = `Price: ${item.price} тг`;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-item-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      deleteItem(item.id);
    });

    itemDiv.appendChild(img);
    itemDiv.appendChild(priceText);
    itemDiv.appendChild(deleteBtn);

    itemsContainer.appendChild(itemDiv);
  }

  function saveItemToLocalStorage(item) {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
  }

  function loadItemsFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.forEach((item) => addItemToContainer(item));
  }

  function deleteItem(id) {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items = items.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(items));
    document.querySelector(`.item[data-id="${id}"]`).remove();
  }

  // Закрытие попапа при клике вне его области
  popupOverlay.addEventListener("click", function (event) {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const openPopupBtn = document.querySelector(".open-popup-btn");
  const closePopupBtn = document.querySelector(".close-popup-btn");
  const popupOverlay = document.getElementById("popupOverlay");

  openPopupBtn.addEventListener("click", function () {
    popupOverlay.style.display = "flex";
  });

  closePopupBtn.addEventListener("click", function () {
    popupOverlay.style.display = "none";
  });

  // Закрытие попапа при клике вне его области
  popupOverlay.addEventListener("click", function (event) {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 3000, // Время задержки между автопереключениями (в миллисекундах)
      disableOnInteraction: false, // Автопрокрутка не останавливается после взаимодействия пользователя
    },
    speed: 2000,
  });
});
