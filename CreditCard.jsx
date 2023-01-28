export default function CreditCard() {
  return (
    <>
      <div class="w h-56 m-auto bg-green-100 rounded-xl relative text-white transition-transform transform ">
        <div
          class="relative object-cover w-full h-full rounded-xl bg-black"
          src="https://i.imgur.com/Zi6v09P.png"
        />

        <div class="w-full px-8 absolute top-8">
          <div class="flex justify-between">
            <div class="">
              <p class="font-light">Name</p>
              <p class="font-medium tracking-widest">Karthik P</p>
            </div>
            <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
          </div>
          <div class="pt-1">
            <p class="font-light">Card Number</p>
            <p class="font-medium tracking-more-wider">4642 3489 9867 7632</p>
          </div>
          <div class="pt-6 pr-6">
            <div class="flex justify-between">
              <div class="">
                <p class="font-light text-xs">Valid</p>
                <p class="font-medium tracking-wider text-sm">11/15</p>
              </div>
              <div class="">
                <p class="font-light text-xs text-xs">Expiry</p>
                <p class="font-medium tracking-wider text-sm">03/25</p>
              </div>

              <div class="">
                <p class="font-light text-xs">CVV</p>
                <p class="font-bold tracking-more-wider text-sm">···</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
