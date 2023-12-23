async function productData() {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error("Получили ошибку при обработки data.json");
        }
        const data = await response.json();
        console.log(data);
        const containerBox = document.querySelector('.container_box');
        data.forEach(({ photo, name, description, price }) => {
            const container =
                `
                <div class="container">
                    <div class="card">
                            <img class="image" src="${photo}" alt="${name}">
                        <div class="content"></div>
                        <p class="name">${name}</p>
                        <p class="description">${description}</p>
                        <p class="price"> <span class="summ_price">${price}</span></p>

                    </div>
                </div>`
            containerBox.insertAdjacentHTML("beforeend", container);
        });
    } catch (error) {
        console.error(error);
    }
}
productData();
