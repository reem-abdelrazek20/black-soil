
/* =========================================
   Mobile Menu
========================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

const navItems = navLinks.querySelectorAll("a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* =========================================
   Solutions Data
========================================= */

const solutions = [

    {
        id: "001",
        image: "img/solution1_2x.png",
        challenge: "فقد نسب كبيرة من الأسمدة المضافة تصل إلى 60%",
        solution: "استصلاح الأراضي الصحراوية وتثبيت العناصر الغذائية وتيسيرها"
    },

    {
        id: "002",
        image: "img/solution2_2x.png",
        challenge: "تراكم المخلفات الزراعية والبلاستيكية",
        solution: "إعادة تدوير المخلفات بعملية صديقة للبيئة بصفر انبعاثات كربونية"
    },

    {
        id: "003",
        image: "img/solution3_2x.png",
        challenge: "زيادة الاحتباس الحراري وتراكم الغازات الدفيئة",
        solution: "ميزة حبس الكربون بمعدل ٣ طن للطن الواحد سنوياً"
    },

    {
        id: "004",
        image: "img/solution4_2x.png",
        challenge: "نفاذية الأراضي الصحراوية وحديثة الاستصلاح",
        solution: "الحفاظ على المياه وتحسين بناء التربة بشكل مستدام"
    }

];


/* =========================================
   Create Solutions Cards
========================================= */

const solutionsGrid = document.getElementById("solutionsGrid");

solutions.forEach((item) => {

    const card = document.createElement("article");

    card.className = "solution-card";

    card.innerHTML = `

        <!-- Challenge -->

        <div class="solution-challenge">

            <img
                src="${item.image}"
                alt=""
            >

            <h3>
                ${item.challenge}
            </h3>

        </div>


        <!-- Solution -->

        <div class="solution-answer">

            <h3>
                ${item.solution}
            </h3>

        </div>

    `;

    solutionsGrid.appendChild(card);

});


/* =========================================
   Products Data
========================================= */

const products = [

    {
        image: "img/carboplant.png",
        name: "كاربلانت (Carboplant)",
        description: "منتج عضوي يزيد من النمو الخضري ويعزز قوة النبات."
    },

    {
        image: "img/biomage.png",
        name: "بيوماج (Bio mage)",
        description: "منتج عضوي يحسن كفاءة امتصاص عنصر النيتروجين."
    },

    {
        image: "img/vinochar.png",
        name: "فينو شار (Vinochar)",
        description: "منتج عضوي يزيد المادة العضوية ويحسن بناء التربة."
    },

    {
        image: "img/gbpower.png",
        name: "جي بي باور (GB Power)",
        description: "منتج عضوي يحسن خواص التربة الفيزيائية ومقاومة الملوحة."
    },

    {
        image: "img/nemachar.png",
        name: "نيماشار (NemaChar)",
        description: "مبيد عضوي فعال وقوي للقضاء على النيماتودا في الجذور."
    },

    {
        image: "img/phochar.png",
        name: "فوشار (Phochar)",
        description: "يقلل من تثبيت الفوسفور ويزيد من النشاط الميكروبي."
    }

];


/* =========================================
   Create Product Cards
========================================= */

const productsGrid = document.getElementById("productsGrid");

products.forEach((product) => {

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `

        <div class="product-content">

            <h3>
                ${product.name}
            </h3>

            <div class="product-line"></div>

            <p>
                ${product.description}
            </p>

        </div>


        <div class="product-image">

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

        </div>

    `;

    productsGrid.appendChild(card);

});


/* =========================================
   Team Data
========================================= */

const team = [

    {
        image: "img/hassan.png",
        name: "حسن السواكني",
        title: "CEO, Founder | مهندس زراعي",
        bio: "خبرة ٥ سنوات بريادة الأعمال، مدرب معتمد من منظمة GIZ."
    },

    {
        image: "img/mohammadkhames.png",
        name: "محمد خميس",
        title: "مهندس ميكانيكا",
        bio: "مهندس ميكانيكا وطاقة شمسية ورائد أعمال."
    },

    {
        image: "img/malak.png",
        name: "ملك فتحي",
        title: "مهندسة زراعية",
        bio: "بجانب أنها مهندسة زراعية لديها خبرة ثلاث سنوات في تصميم الجرافيك وكذلك خبرة سنتين في التسويق."
    }

];


/* =========================================
   Create Team Cards
========================================= */

const teamGrid = document.getElementById("teamGrid");

team.forEach((member) => {

    const card = document.createElement("article");

    card.className = "team-card";

    card.innerHTML = `

        <div class="team-image">

            <img
                src="${member.image}"
                alt="${member.name}"
                loading="lazy"
            >

        </div>


        <h3>
            ${member.name}
        </h3>


        <h4>
            ${member.title}
        </h4>


        <p>
            ${member.bio}
        </p>

    `;

    teamGrid.appendChild(card);

});


/* =========================================
   Mobile Touch Interaction
========================================= */

const solutionCards =
    document.querySelectorAll(".solution-card");


solutionCards.forEach((card) => {

    card.addEventListener("click", () => {

        /*
         On mobile there is no real hover.
         This class allows the solution
         to appear when the user taps.
        */

        card.classList.toggle("active");

    });

});

