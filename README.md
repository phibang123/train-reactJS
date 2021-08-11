đây là dự án để học


Buổi 8: react

/*
   =>{return } <=> ()
*/
cach1: const mapStateToProps = (state) =>

     return {
        mangNguoiDung: state.baiTapQuanLyNguoiDungReducer.mangNguoiDung
     }
 }
cach2: const mapStateToProps = (state) =>
({
     mangNguoiDung: state.baiTapQuanLyNguoiDungReducer.mangNguoiDung
})

lưu ý setstate luôn luôn mất 1 nhịp nên muốn coi chính sác thì
vd:
 handleChangeInput = (event) =>
    {
        let { value, name } = event.target;
        this.setState({
            [name]: value
        },() =>{
          //kiểm tra giá trị khi state thay đổi và state render
            console.log(this.state) //gọi ở tham số sao setstate
        })
       
    }
   

   state.mangNguoiDung = [...state.mangNguoiDung,action.nguoiDung]
     /*action.mangNguoiDung cũng giống như
        state.mangNguoiDung.push(action.nguoiDung) **sao dấu , nó sẻ thêm hàm push
        là cái state.mangNguoiDung nó sao chép cái stateDefault và push thêm action.nguoiDung */


        đối với redux giá trị state objeckt hay mảng thì phải chp1 ra objeckt mới hay mảng mới thì redux nó mởi hểu chúng ta 
        thay đổi giá trị nế chúng ta push trực thiếp vào stateDefault, nó vẫn sẻ thay đổi nhưng mà reudx ko load lại
















this.props: là 1 thuộ tính có sẵn của react class
            component dùng để nhận giá trị tư component cah truyền vào
            (component)

            co1 san84 trong component

            prop chỉ nhận thuộc tính của cha không thể thay đổi dử liệu của thằng con

    sự khác biệt của state và props
      +giống nhau: cả hai điều là thuộc tính có sẵn react class conponent để buildng dử liệu 

      -Khác: -this.state dùng để chứa giá trị thay đổi trên giao diện và có thể gán lại được thông qua phương thức setState


      
             -thi.props dùng để nhận giá trị từ component cha(nơi sử dụng thẻ đó) truyền vào. lưu ý không thể gna1 lại giá trị đó     



       