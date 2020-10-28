"use strict";

class Diem {
  constructor() {
    this._diem = new Array();
  }

  quydoi10to4(diem) {
    let diem4 = 0;

    if (diem >= 9.5) {
      diem4 = 4;
    } else if (diem >= 8.5) {
      diem4 = 3.8;
    } else if (diem >= 8) {
      diem4 = 3.5;
    } else if (diem >= 7) {
      diem4 = 3;
    } else if (diem >= 6) {
      diem4 = 2.5;
    } else if (diem >= 5.5) {
      diem4 = 2;
    } else if (diem >= 4.5) {
      diem4 = 1.5;
    }else if (diem >= 4) {
      diem4 = 1;
    }else if (diem >= 2) {
      diem4 = 0.5;
    }else {
      diem4 = 0;
    }

    return diem4;
  }

  set pushData(ketqua) {
    let diemtk = ketqua.diem.split('|');
    let maxD = diemtk.length - 1;
    let diem4 = this.quydoi10to4(diemtk[maxD]);

    this._diem.push({
      tin: ketqua.tin,
      diem10: diemtk[maxD] * 1,
      diem4: diem4 * 1
    });
  }

  get getDiemTichLuy() {
    let tu = 0;
    let mau = 0;

    for (var i = this._diem.length - 1; i >= 0; i--) {
      let __diem = this._diem[i];
      tu += __diem.diem10 * __diem.tin;
      mau += __diem.tin;
    }

    return tu / mau;
  }

  get getDiemTichLuyHe4() {
    let tu = 0;
    let mau = 0;

    for (var i = this._diem.length - 1; i >= 0; i--) {
      let __diem = this._diem[i];
      tu += __diem.diem4 * __diem.tin;
      mau += __diem.tin;
    }

    return tu / mau;
  }

  get getSTT() {
    return this._diem.length + 1;
  }

}

$(function () {
  let ketqua = new Diem();
  let tongsomon = $("#tblStudentMark tr:not(.DataGridFixedHeader)").length - 1;

  let _rows = $("#tblStudentMark tr:not(.DataGridFixedHeader)");

  for (var i = 0; i < tongsomon; i++) {
    let _cell = $(_rows[i]).find('td');

    let ketquamon = {
      tin: $(_cell[3]).text().trim() * 1,
      diem: $(_cell[12]).text().trim()
    };
    ketqua.pushData = ketquamon;
  }

  let html = `
  <tr height="20">
    <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn">${ketqua.getSTT}</td>
    <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
    <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
    <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
    <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
    <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
    <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
    <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
		<td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
		<td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn">Điểm tích lũy hệ 10:</td>
		<td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn">${Math.round(ketqua.getDiemTichLuy * 100) / 100}</td>
    <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn">Điểm tích lũy hệ 4:</td>
		<td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn">${Math.round(ketqua.getDiemTichLuyHe4 * 100) / 100}</td>
	</tr>
  `;
  $("#tblStudentMark").append(html);
});


// class Diem {
//   constructor() {
//     this._diem = new Array();
//   }
//   quydoi10to4(diem){
//     let diem4 = 0;
//     if (diem >= 8.5) {
//       diem4 = 4;
//     }else if(diem >= 8){
//       diem4 = 3.5;
//     }
//     else if(diem >= 7){
//       diem4 = 3;
//     }
//     else if(diem >= 6.5){
//       diem4 = 2.5;
//     }
//     else if(diem >= 5.5){
//       diem4 = 2;
//     }
//     else if(diem >= 5){
//       diem4 = 1.5;
//     }
//     else if(diem >= 4){
//       diem4 = 1;
//     }
//     return diem4;
//    }
//
//   set pushData(ketqua){
//     let diemtk  = ketqua.diem.split('|');
//     let maxD = diemtk.length -1;
//
//     let diem4 = this.quydoi10to4(diemtk[maxD]);
//     this._diem.push({
//       tin: ketqua.tin ,
//       diem10: diemtk[maxD] * 1,
//       diem4: diem4 * 1
//     });
//   }
//
//   get getDiemTichLuy(){
//     let tu= 0;
//     let mau  = 0;
//     for (var i = this._diem.length-1 ; i >= 0; i--) {
//       let __diem = this._diem[i];
//       tu += __diem.diem10 * __diem.tin;
//       mau += __diem.tin;
//     }
//     return tu/mau;
//   }
//   get getDiemTichLuyHe4(){
//     let tu= 0;
//     let mau  = 0;
//     for (var i = this._diem.length-1 ; i >= 0; i--) {
//       let __diem = this._diem[i];
//       tu += __diem.diem4 * __diem.tin;
//       mau += __diem.tin;
//     }
//     return tu/mau;
//   }
//   get getSTT(){
//     return this._diem.length+1;
//   }
// }
// $(function(){
//   let ketqua = new Diem();
//
//   let tongsomon =  $("#tblStudentMark tr:not(.DataGridFixedHeader)").length -1;
//
//   let _rows = $("#tblStudentMark tr:not(.DataGridFixedHeader)");
//
//   for (var i = 0; i < tongsomon; i++) {
//     let _cell = $(_rows[i]).find('td');
//     let ketquamon = {
//       tin : $(_cell[3]).text().trim()*1,
//       diem : $(_cell[12]).text().trim()
//     };
//     ketqua.pushData = ketquamon;
//   }
//   let html = `
//   <tr height="20">
//     <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn">${ketqua.getSTT}</td>
//     <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
//     <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
//     <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
//     <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
//     <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
//     <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
//     <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
// 		<td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn"></td>
// 		<td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn">Điểm tích lũy hệ 10:</td>
// 		<td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn">${ Math.round(ketqua.getDiemTichLuy*100)/100}</td>
//     <td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn">Điểm tích lũy hệ 4:</td>
// 		<td style="BORDER-RIGHT:RosyBrown 1px solid;" nowrap="nowrap" class="cssListItem DataGridFixedColumn">${ Math.round(ketqua.getDiemTichLuyHe4*100)/100}</td>
// 	</tr>
//   `;
//
//   $("#tblStudentMark").append(html);
//
// })
