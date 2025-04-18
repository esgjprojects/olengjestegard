<template>
    <div class="vh-100 container-fluid g-0 d-flex justify-content-center flex-column">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <Logo />
            </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
            <div class="row align-items-center w-100 g-3" style="max-width: 500px">
                <div class="col-12 col-sm-4">
                    <div class="pill rounded bg-white p-2 text-center d-flex justify-content-center align-items-center">
                        <IconsBedIcon />
                        <span class="ms-2 fs-5">Hotell</span>
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                    <div class="pill rounded bg-white p-2 text-center d-flex justify-content-center align-items-center">
                        <IconsCoffeeIcon />
                        <span class="ms-2 fs-5">Kafé</span>
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                    <div class="pill rounded bg-white p-2 text-center d-flex justify-content-center align-items-center">
                        <IconsPartyIcon />
                        <span class="ms-2 fs-5">Uteliv</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <div class="row w-100 g-2" style="max-width: 500px">
                <div class="col-12">
                    <i class="bi bi-telephone-fill fs-4"></i>
                    <a class="ms-2 fs-4" href="tel:+4753766100">53 76 61 00</a>
                </div>
                <div class="col-12">
                    <i class="bi bi-envelope-at-fill fs-4"></i>
                    <a class="ms-2 fs-4" href="mailto:post@olengjestegard.no">post@olengjestegard.no</a>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <div class="row w-100" style="max-width: 800px">
                <div class="col">
                    <Location />
                </div>
            </div>
        </div>
    </div>
</template>