<template>
  <div class="p-5 flex bg-white shadow w-full">
    <ul class="flex flex-col flex-no-wrap manual-table w-full">
      <li class="flex flex-col flex-no-wrap">
        <span class="flex flex-col flex-no-wrap mb-3">
            <p class="uppercase text-2xl text-gray-500">#0025</p>
        </span>
        <span class="flex flex-col flex-no-wrap mb-3">
            <p class="uppercase text-xs text-gray-500"><i class='uil uil-user'></i>Customer's name</p>
            <p>Jegede Bukola</p>
        </span>
        <span class="flex flex-col flex-no-wrap mb-3">
            <p class="uppercase text-xs text-gray-500"><i class='uil uil-balance-water'></i>Fish type</p>
            <p>Cat Fish</p>
        </span>
        <span class="flex flex-col flex-no-wrap mb-3">
            <p class="uppercase text-xs text-gray-500"><i class='uil uil-balance-calculator-alt'></i>Count</p>
            <p>53</p>
        </span>
        <span class="flex flex-col flex-no-wrap mb-3">
            <p class="uppercase text-xs text-gray-500"><i class='uil uil-balance-scale'></i>Weight(KG)</p>
            <p>500</p>
        </span>
        <span class="flex flex-col flex-no-wrap mb-3">
            <p class="uppercase text-xs text-gray-500"><i class='uil uil-coins'></i>Price / kg</p>
            <p>&#8358;700.00</p>
        </span>
        <span class="flex flex-col flex-no-wrap mb-3">
            <p class="uppercase text-xs text-gray-500"><i class='uil uil-receipt'></i>Total Price</p>
            <p>&#8358;350,000.00</p>
        </span>
        <span class="flex flex-col flex-no-wrap mb-3">
            <p class="uppercase text-xs text-gray-500"><i class='uil uil-calendar-alt'></i>Date</p>
            <p>31.jan.2020</p>
        </span>
      </li>
    </ul>
  </div>
</template>
<style lang='scss' scoped>
.manual-table {
  li {
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    a {
      padding: 12px 7px;
      p{
        i {
          display: none;
        }
      }
      @media only screen and (max-width: 720px) {
        margin: 12px 0;
        p, p:first-child, p:nth-child(2), p:nth-child(3), p:nth-child(4) {
          width: 100%;
          padding: 7px 8px;
          flex-flow: row nowrap;
          i {
            display: inline-block;
          }
        }
      }
    }
  }
  li:last-child {
    border-bottom: none;
  }
}
</style>
