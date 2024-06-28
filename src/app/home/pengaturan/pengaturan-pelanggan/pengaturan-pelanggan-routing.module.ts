import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengaturanPelangganPage } from './pengaturan-pelanggan.page';

const routes: Routes = [
  {
    path: '',
    component: PengaturanPelangganPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengaturanPelangganPageRoutingModule {}
