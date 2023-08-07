const dataArray = [
    {
        name: '1 pair',
        discount: 50,
        price: 195,
        popular: "",
        del:""
    },
    {
        name: '2 pair',
        discount: 40,
        price: 345,
        popular: "Most Popular",
        del:"DKK:195.00"
    },
    {
        name: '3 pair',
        discount: 60,
        price: 528,
        popular: "",
        del:""
    },
]
const container = document.getElementById('dataContainer');

container.innerHTML = dataArray.map((item, index) => `
<div class="sub-main">
    <div class="inner-side" id='container'>
        <div class="quantity-2">
            <input type="radio" id="radio-${index + 1}" name="quantity-radio" onchange="toggleDropdownData(${index + 1})"/>
            <p>${item.name}<br />DKK ${item.price.toFixed(2)}</p>
        </div>
        <del class="p2">${item.del}</del>
        <div class="discount-info">
            <p class="popular">${item.popular}</p>
            <p class="p3">${item.discount}% off</p>
        </div>
    </div>
    <div class="inputs-container" id="dropdownData${index + 1}">
  
  <div class="dropdown-menu">
      <div class="menu-no">
          <p>#1</p>
          <p>#2</p>
      </div>
      <div class="dropdown-sub-container">
          <h6 style="margin: 0;">size</h6>
          <select>
              <option value="">s</option>
              <option value="">m</option>
          </select>
          <select>
              <option value="">s</option>
              <option value="">m</option>
          </select>
      </div>
      <div class="dropdown-sub-container">
          <h6 style="margin: 0;">color</h6>
          <select>
              <option value="">blue</option>
              <option value="">red</option>
          </select>
          <select>
              <option value="">blue</option>
              <option value="">green</option>
          </select>
      </div>
    
  </div>
    </div>
</div>
`).join('');
// Hide all dropdownData divs by default
const dropdownDataDivs = container.querySelectorAll('.inputs-container');
dropdownDataDivs.forEach(div => div.style.display = 'none');

function toggleDropdownData(selectedRadio) {
dropdownDataDivs.forEach(div => div.style.display = 'none');

const dropdownData = document.getElementById(`dropdownData${selectedRadio}`);
dropdownData.style.display = 'block';

const containers = container.querySelectorAll('.sub-main');
containers.forEach((container, i) => {
    if (i === selectedRadio - 1) {
        container.style.backgroundColor = '#F4FBF9';
    } else {
        container.style.backgroundColor = '';
    }
});

}