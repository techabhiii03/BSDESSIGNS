const nav = document.getElementById("mainNav");
const backToTop = document.getElementById("backToTop");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".nav-link, .navbar .btn").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navbarMenu");
    const collapse = bootstrap.Collapse.getInstance(menu);
    if (collapse) collapse.hide();
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;
    projectItems.forEach(item => {
      const matches = selected === "all" || item.dataset.category === selected;
      item.classList.toggle("is-hidden", !matches);
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const consultationForm = document.getElementById("consultationForm");
const formSuccess = document.getElementById("formSuccess");

consultationForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!consultationForm.checkValidity()) {
    event.stopPropagation();
    consultationForm.classList.add("was-validated");
    return;
  }

  consultationForm.reset();
  consultationForm.classList.remove("was-validated");
  formSuccess.style.display = "block";

  setTimeout(() => {
    formSuccess.style.display = "none";
  }, 5000);
});

const projectData = {
  "warm-residence": {category:"Residential interior",title:"Warm Minimal Residence",intro:"A calm family home shaped through natural textures, clean geometry and practical storage.",brief:"The owners wanted a premium but comfortable home with open social areas, private retreat spaces and generous concealed storage.",owner:"Aarav and Kavya Mehta",ownerRole:"Homeowners",review:"The team balanced design and practicality beautifully. Every corner feels intentional, and the execution was far more organised than we expected.",location:"Gurugram, Haryana",area:"3,200 sq. ft.",duration:"7 months",budget:"₹48–55 lakh",completed:"February 2026",scope:"Complete turnkey interior",result:"Delivered 3% under the approved budget.",challenges:["Creating storage without reducing openness.","Working around fixed plumbing and structural positions.","Maintaining consistent veneer shades."],solutions:["Integrated storage into wall panelling.","Replanned wet areas around existing service shafts.","Approved finish samples and veneer batches before production."],images:["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=88"]},
  "studio-office": {category:"Commercial interior",title:"Studio Office",intro:"A flexible workplace for focused work, collaboration and client presentations.",brief:"The founder needed a compact office that could support a growing team while maintaining a creative and premium identity.",owner:"Rohan Malhotra",ownerRole:"Founder, Northline Studio",review:"The office feels larger, brighter and much more aligned with our brand.",location:"New Delhi",area:"1,850 sq. ft.",duration:"14 weeks",budget:"₹24–28 lakh",completed:"November 2025",scope:"Design and build",result:"Added 20% more usable workstations.",challenges:["Limited natural light.","Short fit-out window.","Sound control between open desks and meeting rooms."],solutions:["Used glazed partitions.","Executed civil and furniture packages in parallel.","Added acoustic ceilings and fabric panels."],images:["https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=88"]},
  "quiet-kitchen": {category:"Renovation",title:"Quiet Kitchen",intro:"A dated kitchen transformed into a brighter and more efficient family workspace.",brief:"The client wanted better circulation, more preparation space and easier maintenance while retaining selected appliances.",owner:"Neha Kapoor",ownerRole:"Homeowner",review:"Storage, lighting and workflow are all better, and the renovation was surprisingly manageable.",location:"Noida, Uttar Pradesh",area:"620 sq. ft.",duration:"9 weeks",budget:"₹12–15 lakh",completed:"August 2025",scope:"Kitchen renovation",result:"Increased counter space by 35%.",challenges:["Uneven walls and outdated wiring.","Keeping part of the kitchen usable.","Matching retained appliances with new cabinetry."],solutions:["Created a service wall.","Divided work into controlled phases.","Prepared appliance-specific shop drawings."],images:["https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=88"]},
  "private-suite": {category:"Residential interior",title:"Serene Private Suite",intro:"A layered bedroom suite designed around rest, privacy and soft hotel-like comfort.",brief:"The homeowners wanted a quiet and luxurious primary suite without decorative excess.",owner:"Vikram and Isha Sethi",ownerRole:"Homeowners",review:"It feels like a private retreat inside our own home.",location:"Faridabad, Haryana",area:"980 sq. ft.",duration:"12 weeks",budget:"₹18–22 lakh",completed:"April 2026",scope:"Suite design and execution",result:"Completed on schedule with all custom furniture installed.",challenges:["Long narrow room.","Concealing services.","Balancing soft and functional lighting."],solutions:["Used a custom headboard wall.","Integrated services into coves and joinery.","Layered ambient, reading and wardrobe lighting."],images:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=88","https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=88"]}
};

const projectDialog = document.getElementById("projectDialog");
const caseClose = document.getElementById("caseClose");
let lastProjectTrigger = null;

function fillList(id, items){document.getElementById(id).innerHTML = items.map(item => `<li>${item}</li>`).join("");}
function openProject(key, trigger){
  const p = projectData[key]; if(!p) return;
  lastProjectTrigger = trigger;
  const fields={caseCategory:p.category,caseTitle:p.title,caseIntro:p.intro,caseBrief:p.brief,caseReview:p.review,caseOwner:p.owner,caseOwnerRole:p.ownerRole,caseLocation:p.location,caseArea:p.area,caseDuration:p.duration,caseBudget:p.budget,caseCompleted:p.completed,caseScope:p.scope,caseResult:p.result};
  Object.entries(fields).forEach(([id,value])=>document.getElementById(id).textContent=value);
  fillList("caseChallenges",p.challenges); fillList("caseSolutions",p.solutions);
  document.getElementById("caseGallery").innerHTML=p.images.map((src,i)=>`<img src="${src}" alt="${p.title} image ${i+1}">`).join("");
  document.body.classList.add("dialog-open");
  projectDialog.showModal();
  projectDialog.querySelector(".case-scroll").scrollTop=0;
}
function closeProject(){ if(projectDialog.open) projectDialog.close(); }
caseClose.addEventListener("click", closeProject);
projectDialog.addEventListener("click", e=>{ if(e.target===projectDialog) closeProject(); });
projectDialog.addEventListener("close", ()=>{document.body.classList.remove("dialog-open"); lastProjectTrigger?.focus();});
document.querySelectorAll(".project-open").forEach(card=>{
  card.addEventListener("click",()=>openProject(card.dataset.project,card));
  card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openProject(card.dataset.project,card);}});
});

function removeStuckModalBackdrop() {
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.remove();
  });

  document.body.classList.remove("modal-open");
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("padding-right");

  document.documentElement.style.removeProperty("overflow");
}

document.addEventListener("DOMContentLoaded", removeStuckModalBackdrop);

document.getElementById("projectModal")?.addEventListener("hidden.bs.modal", () => {
  removeStuckModalBackdrop();
});

document.querySelectorAll("[data-bs-dismiss='modal']").forEach(button => {
  button.addEventListener("click", () => {
    setTimeout(removeStuckModalBackdrop, 300);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    setTimeout(removeStuckModalBackdrop, 300);
  }
});