<template>
  <div class="p-5 flex lg:bg-white w-full">
    <router-link class="callOut-btn" to="/sales/create"><i class='uil uil-plus'></i></router-link>
    <ul class="flex flex-col flex-no-wrap manual-table w-full">
      <li class="hidden lg:flex table-head">
        <p class="text-gray-500 mr-5">#Id</p>
        <p class="mr-5">Customer's name</p>
        <p class="mr-5">Date</p>
        <p class="mr-5 lg:text-center">Weight</p>
        <p class="mr-5">Total amount</p>
      </li>
      <li class="flex w-full">
        <router-link class="flex flex-col bg-white w-full lg:flex-row" to="/sale/00255">
          <p class="text-gray-500 mr-5">#0021</p>
          <p class="mr-5"><i class='uil uil-user'></i>Folasade Ayodeji</p>
          <p class="mr-5"><i class='uil uil-calendar-alt'></i>30.Jan.2020</p>
          <p class="mr-5 lg:text-center"><i class='uil uil-balance-scale'></i>185</p>
          <p class="mr-5"><i class='uil uil-coins'></i>&#8358; 320,200.00</p>
        </router-link>
      </li>
      <li class="flex">
        <router-link class="flex flex-col bg-white w-full lg:flex-row" to="/sales/#00255">
          <p class="text-gray-500 mr-5">#0021</p>
          <p class="mr-5"><i class='uil uil-user'></i>Jegede Bukola</p>
          <p class="mr-5"><i class='uil uil-calendar-alt'></i>30.Jan.2020</p>
          <p class="mr-5 lg:text-center"><i class='uil uil-balance-scale'></i>500</p>
          <p class="mr-5"><i class='uil uil-coins'></i>&#8358; 5,000,200.00</p>
        </router-link>
      </li>
      <li class="flex">
        <router-link class="flex flex-col bg-white w-full lg:flex-row" to="/sales/#00255">
          <p class="text-gray-500 mr-5">#0021</p>
          <p class="mr-5"><i class='uil uil-user'></i>Gbejule Bawor</p>
          <p class="mr-5"><i class='uil uil-calendar-alt'></i>30.Jan.2020</p>
          <p class="mr-5 lg:text-center"><i class='uil uil-balance-scale'></i>85</p>
          <p class="mr-5"><i class='uil uil-coins'></i>&#8358; 90,200.00</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang='scss' scoped>
.callOut-btn {
  display: flex;
  align-items:center;
  justify-content: center;
  position: fixed;
  bottom: 20px; right: 20px;
  width: 50px; height: 50px;
  border-radius: 50%;
  background: #269bfa;
  outline: none;
  i {
    color: #fff;
    font-size: 20px;
  }
}
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
      p:first-child {
        width: 50px;
      }
      p:nth-child(2) {
        width: 200px;
      }
      p:nth-child(3) {
        width: 100px;
      }
      p:nth-child(4) {
        width: 100px;
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
  li.table-head {
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 12px 7px;
    border-bottom: 1px solid #eeeeee;
    p:first-child {
      width: 50px;
    }
    p:nth-child(2) {
      width: 200px;
    }
    p:nth-child(3) {
      width: 100px;
    }
    p:nth-child(4) {
      width: 100px;
    }
  }
}
</style>
