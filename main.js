document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const authModal = document.getElementById('authModal');
    const closeModal = document.querySelector('.close-modal');
    const emailForm = document.getElementById('emailLoginForm');
    const googleBtn = document.getElementById('googleBtn');
    const registerForm = document.getElementById('emailRegisterForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Chuyển qua form đăng ký
if (showRegister) {
    showRegister.addEventListener('click', () => {
        emailForm.style.display = 'none';
        registerForm.style.display = 'block';
    });
}

// Chuyển về form đăng nhập
if (showLogin) {
    showLogin.addEventListener('click', () => {
        registerForm.style.display = 'none';
        emailForm.style.display = 'block';
    });
}



    if (loginBtn) {
        loginBtn.addEventListener('click', () => { authModal.style.display = 'block'; });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => { authModal.style.display = 'none'; });
    }

    window.addEventListener('click', (e) => {
        if (e.target == authModal) authModal.style.display = 'none';
    });

    const loginSuccess = (method) => {
        localStorage.setItem("isLogin", "true");
        alert(`Đăng nhập thành công bằng ${method}!`);
        authModal.style.display = 'none';
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    };

        if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPass').value;

        const savedPass = localStorage.getItem(email);

        if (!savedPass) {
            alert('Email chưa đăng ký!');
            return;
        }

        if (savedPass !== pass) {
            alert('Sai mật khẩu!');
            return;
        }

        loginSuccess(`Email: ${email}`);
    });


    }
    // ĐĂNG KÝ
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('regEmail').value;
        const pass = document.getElementById('regPass').value;

        if (localStorage.getItem(email)) {
            alert('Email đã tồn tại!');
            return;
        }

        // Lưu tài khoản
        localStorage.setItem(email, pass);
        alert('Đăng ký thành công! Hãy đăng nhập.');

        registerForm.style.display = 'none';
        emailForm.style.display = 'block';
    });
}


    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            googleBtn.innerText = "Đang kết nối...";
            setTimeout(() => {
                loginSuccess('Google');
                googleBtn.innerHTML = `<img src="./logo (1)/gg.png" alt="Google"> Tiếp tục với Google`;
            }, 1500);
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('Bạn có muốn đăng xuất không?')) {
                localStorage.removeItem("isLogin");
                logoutBtn.style.display = 'none';
                loginBtn.style.display = 'block';
            }
        });
    }

    if (localStorage.getItem("isLogin") === "true") {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "block";
    }

    const dsdiadiem = [
        {id:"padthai",
         name:"Phở Bò",
         area:"Bánh phở mềm, nước dùng trong ngọt xương, thịt bò tái/chín thơm",
         image:"./anhbaocao/phobo.jpg",
         congthuc:"<br>--- Nguyên Liệu ---<br>- Nước Dùng:<br>• 1kg xương bò (xương ống)<br>• 300g thịt bò nạm<br>• 1 củ gừng<br>• 2 củ hành tây<br>• 1 thanh quế<br>• 1 thìa hạt ngò<br><br>- Gia Vị:<br>• Muối<br>• Đường Phèn<br>• Nước mắm<br>• Bột ngọt<br><br>- Ăn Kèm:<br>• Bánh phở tươi<br>• Thịt bò tái/chín<br>• Hành lá, hành tím, ngò gai...<br>• Giá đỗ, chanh, ớt<br><br>--- Cách Nấu ---<br>- Bước 1: Sơ chế xương<br>• Xương bò trụng nước sôi 3-5 phút (giúp nước trong)<br><br>- Bước 2: Hầm nước dùng<br>• Cho xương và thịt vào nồi<br>• Cho 3-4 lít nước<br>• Hầm nhỏ lửa 1,5-2 tiếng<br>• Hớt bọt thường xuyên<br><br>- Bước 3: Nướng gia vị<br>• Nướng cháy nhẹ gừng và hành tây<br>• Rang thơm: hồi, quế, ngò<br>• Bỏ tất cả vào nồi<br><br>- Bước 4: Nêm nước phở<br>• 2 thìa muối<br>• 2 thìa đường phèn<br>• 3 thìa nước mắm<br><br>- Bước 5: Hoàn thành<br>• Vớt thịt ra thái lát vừa ăn<br>• Trụng phở cho vào tô<br>• Xếp thịt vừa mắt và chan nước dùng<br>• Rắc hành, ngò cho thơm<br>• Ăn<br>"
        },

        {id:"vitquay",
         name:"Vịt quay Bắc Kinh",
         area:"Vịt da giòn, thịt mềm, ăn kèm bánh tráng, dưa leo và sốt đặc trưng",
         image:"./anhbaocao/vitquaybackinh.jpg",
         congthuc:"<br>--- Nguyên Liệu ---<br><br>• 1 con vịt 2-2,5kg<br>• 2 muỗng mật ong<br>• 1 muỗng giấm<br>• 1 muỗng chanh<br>• 1 muỗng rượu trắng<br>• 1 muỗng muối<br>• gừng và hành đập dập<br><br>- Cách làm:<br>• Sơ chế vịt: rửa với nước muối và gừng cho hết hôi<br>• Luộc vịt sơ 2-3phuts với hước sôi<br>• Quét mật ong + giấm + chanh đều lên da vịt<br>• Quay nướng: làm nóng lò 180 độ nướng 35-40p tăng lên 220 độ cho da vịt giòn<br>• Ăn"
        },

        
        {id:"somtam",
         name:"Kung Ob Woon Sen",
         area:"Tôm hấp miến, thơm mùi tiêu, gừng và thảo mộc",
         image:"./anhbaocao/Kung Ob Woon Sen.jpg",
         congthuc:"<br>--- Nguyên Liệu ---<br>• tôm<br>• miếng dong<br>• tỏi, gừng<br>• tiêu, hành lá<br><br>- Gia vị: nước mắm<br>• dầu mè<br>• dầu hào<br>• đường<br><br>- Cách làm:<br>• ngâm miếng mềm<br>• phi tỏi + gừng + tiêu<br>• trộn miếng với 1 muỗng nước mắm + 1 muỗng dầu hào + 1,2 muỗng đường + dầu mè<br>• cho miến xuống nồi xếp tôm lên trên<br>• đậy nắp và hấp 10-12p<br>• rắc hành và thưởng thức"
        },

        {
            id: "sashimi",
            name: "Sashimi",
            area: "Nhật Bản - Hải sản tươi sống thái lát",
            image: "./anhbaocao/sashimi.jpg",
            congthuc: "<br>--- Nguyên Liệu ---<br>• Cá hồi/ cá ngừ (loại ăn sống)<br>• Wasabi, nước tương Nhật<br>• Gừng hồng<br><br>- Cách làm<br>• Cá rửa nhanh, lau khô để ngăn đá 10-15 phút cho săn lại<br>• Dùng dao thật bén cắt lát xéo dày 0,5cm<br>• Xếp ra đĩa chấm wasabi, nước tương<br>• Thưởng thức liền"
        },

{id:"padthai",name:"Phở Bò",area:"Bánh phở mềm, nước dùng trong ngọt xương, thịt bò tái/chín thơm",image:"./anhbaocao/phobo.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>- Nước Dùng:<br>• 1kg xương bò (xương ống)<br>• 300g thịt bò nạm<br>• 1 củ gừng<br>• 2 củ hành tây<br>• 1 thanh quế<br>• 1 thìa hạt ngò<br><br>- Gia Vị:<br>• Muối<br>• Đường Phèn<br>• Nước mắm<br>• Bột ngọt<br><br>- Ăn Kèm:<br>• Bánh phở tươi<br>• Thịt bò tái/chín<br>• Hành lá, hành tím, ngò gai...<br>• Giá đỗ, chanh, ớt<br><br>--- Cách Nấu ---<br>- Bước 1: Sơ chế xương<br>• Xương bò trụng nước sôi 3-5 phút (giúp nước trong)<br><br>- Bước 2: Hầm nước dùng<br>• Cho xương và thịt vào nồi<br>• Cho 3-4 lít nước<br>• Hầm nhỏ lửa 1,5-2 tiếng<br>• Hớt bọt thường xuyên<br><br>- Bước 3: Nướng gia vị<br>• Nướng cháy nhẹ gừng và hành tây<br>• Rang thơm: hồi, quế, ngò<br>• Bỏ tất cả vào nồi<br><br>- Bước 4: Nêm nước phở<br>• 2 thìa muối<br>• 2 thìa đường phèn<br>• 3 thìa nước mắm<br><br>- Bước 5: Hoàn thành<br>• Vớt thịt ra thái lát vừa ăn<br>• Trụng phở cho vào tô<br>• Xếp thịt vừa mắt và chan nước dùng<br>• Rắc hành, ngò cho thơm<br>• Ăn<br>"
},

{id:"tomyum",name:"Bún Bò",area:"Bún nước cay nhẹ, thịt bò, giò heo, mắm ruốc đậm đà",image:"./anhbaocao/bunbo.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>- Nước Dùng:<br>• 1kg xương bò<br>• 500g bắp bò<br>• 3 củ cây sả<br>• 1 củ hành tây<br>• 1 củ gừng<br><br>- Gia Vị:<br>• Muối<br>• 2 Muỗng mắm ruốc Huế<br>• 1 Muỗng sate<br>• 1 Muỗng màu điều<br><br>- Ăn Kèm:<br>• Bún sợi to<br>• Thịt bò tái/chín<br>• Hành lá, rau răm<br>• Giá đỗ, chanh, ớt<br><br>--- Cách Nấu ---<br>- Bước 1: Sơ chế xương<br>• Xương bò trụng nước sôi 3-5 phút (giúp nước trong)<br><br>- Bước 2: Hầm nước dùng<br>• Cho xương và thịt vào nồi<br>• Cho 3-4 lít nước<br>• Hầm nhỏ lửa 1,5-2 tiếng<br>• Hớt bọt thường xuyên<br><br>- Bước 3: Nêm mắm ruốc<br>• Hòa mắm ruốc với 1 chén nước<br>• Lọc lấy nước<br>• Bỏ tất cả vào nồi<br><br>- Bước 4: Phi sate<br>• Phi dầu điều và sate cho thơm<br>• Cho vào nổi quậy đều<br><br>- Bước 5: Nêm gia vị<br>• 2 muỗng muối<br>• 3 muỗng nước mắm<br>• 2 muỗng đường phèn<br><br>- Bước 6: Hoàn thành<br>• Vớt thịt ra cắt lát<br>• Trụng bún cho vào tô<br>• Xếp thịt chan nước<br>• Rắc hành, ngò cho thơm<br>• Ăn<br>"
},

{id:"somtam",name:"Bún Chả",area:"Thịt nướng than ăn kèm bún, rau sống và nước mắm chua ngọt",image:"./anhbaocao/buncha.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>Phần chả:<br>• 300g thịt ba chỉ<br>• 300g thịt nạc vai xay<br>• 2 muỗng nước mắm<br>• 1 muỗng đường<br>• 1 muỗng mật ong<br>• 1 muỗng dầu hào<br>• tỏi + hành tím băm<br>• tiêu<br><br>- Nước chấm:<br>• 200g nước mắm<br>• 100ml nước lọc<br>• 2-3 muỗng đường<br>• 2 muỗng giấm/chanh<br>• đu đủ xanh/cà rốt bào sợi<br>• tỏi ớt băm<br><br>- Cách làm:<br>• Ướp thịt:<br>Trộn tất cả gia vị với thịt để 30p cho thấm<br>• Nướng chả:<br>Nướng than/nồi chiên/áp chả đến khi vàng đều<br>• Pha nước chấm:<br>Đun nhẹ nước mắm + nước + đường<br>• Tắt bếp cho giấm/ chanh tỏi ớt vào<br>• Thả đu đủ cà rốt vào<br>• Cho char vào bát nước chấm ăn kèm bún và rau sống"
},

{id:"curry",name:"Bánh Mì",area:"Bánh mì giòn, kẹp thịt, pate, đồ chua và rau thơm",image:"./anhbaocao/banhmi.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• Bánh mì<br><br>-Phần nhân:<br>• Thịt nguội/chả lụa/thịt nướng/trứng ốp la<br>• pate heo/bò<br><br>- Rau:<br>• Dưa leo<br>• Đồ chua<br>• Ngò hành lá<br>• Ớt<br><br>- Gia vị:<br>• Mayonnaise<br>• Nước tương xì dầu<br>• Maggi<br><br>- Cách làm:<br>• Chuẩn bị bánh mì cho vô nồi/lò 3-5p cho giòn<br>• Rạch dọc bánh mì<br>• Lần lượt cho pate/ mayo/thit/chả/trứng/Ngò/đồ chua/dưa leo/rưới nước tương...<br>• Kẹp lại và ăn"
},

{id:"gaengsom",name:"Bánh Xèo",area:"Bánh giòn nhân tôm thịt, giá đỗ, ăn cuốn rau sống",image:"./anhbaocao/banhxeo.jpeg",
congthuc:"<br>--- Nguyên Liệu ---<br><br>-Bột bánh xèo:<br>• 200g bột bánh xèo (hoặc bột gạo)<br>• 250ml nước<br>• 100ml nước cốt dùa<br>• 1,2 muỗng cà phê bột nghệ<br>• 1,2 Muỗng muối<br>• Hành lá cắt nhỏ<br><br>- Nhân:<br>• 200g thịt ba chỉ cắt nhỏ<br>• 150g tôm cắt hạt lựu<br>• Giá đỗ <br>• Hành tây<br><br>- Ăn kèm:<br>• Xà lách, cải xanh, rau thơm<br><br>- Nước chấm:<br>• Nước mắm chua ngọt (mắm + đường +chanh+tỏi ớt) quậy đều<br><br>- Cách làm:<br><br>- Bước 1: pha bột<br>• trộn bột + nước + nước cốt dùa + nghệ + muối + hành lá quậy đều để nghỉ 20p<br><br>- Bước 2: xào sơ nhân<br>• Phi hành cho thịt, tôm vào đảo chín sơ<br><br>- Bước 3: đổ bánh<br>• Làm nóng chảo<br>• Cho thịt tôm vào chảo<br>• Múc bột tráng mỏng<br>• Thêm giá<br>• Đậy nắp 1p<br>• Mở nắp chiến đến khi viền bánh vàng giòn<br>• Gâppj đôi<br>• Cuốn rau + bánh xèo + chấm nước mắm<br>• Ănnn"
},

{id:"kha",name:"Cơm Tấm",area:"Cơm gạo tấm, sườn nướng, trứng, bì, chả",image:"./anhbaocao/comtam.webp",
congthuc:"<br>--- Nguyên Liệu ---<br><br>- Cơm:<br>• 300g gạo tấm<br>• nước<br><br>- Sườn nướng:<br>• 300g sườn cốt lết<br>• 2 muỗng nước mắm<br>• 1 muỗng đường<br>• 1 muỗng mật ong<br>• 1 muỗng dầu hào<br>• Tỏi + hành băm<br>• tiêu<br><br>- Ăn kèm:<br>• trứng opla<br>• chả trứng/bì<br>• dưa leo cà chua<br><br>- Nước mắm:<br>• 3 muỗng nước mắm<br>• 2 muỗng đường<br>• 1 muỗng nước cốt chanh<br>• Tỏi ớt băm<br><br>- Cách làm:<br>• Nấu cơm: vo gạo, cho nước hơi nhiều hơn trung bình và nấu chín<br>• Ướp sườn: trộn tất cả gia vị vào ướp 30p-2 tiếng<br>• Nướng sườn: nướng than cho vàng thơm<br>• Làm đồ chua: trộn cà rốt đỏ và trắng với giấm + đường để ngâm 15p<br>• Pha nước mắm: Trộn tất cả nguyên liệu nước mắm nêm chua ngọt vừa<br>• Dọn cơm: Xới cơm, thêm sườn< trứng, bì chả< dưa leo đồ chua, cham mắm <br>• Ăn"
},

{id:"moo",name:"Chả Giò",area:"Nem rán giòn, nhân thịt, miến, mộc nhĩ",image:"./anhbaocao/chagio.png",
congthuc:"<br>--- Nguyên Liệu ---<br><br> Nhân:<br>• 200g thịt heo xay<br>• 100g tôm băm<br>• 1 củ cà rốt bào sợi<br>• 10g miến ngâm nhỏ<br>• 10g mộc nhĩ<br>• 1 quả trứng<br>• hành tím băm<br>• muối+ tiêu+hạt nêm<br><br>- Cuốn:<br>• Bánh tráng cuốn chả giò<br><br>- Ăn kèm: <br>• rau sống<br>• bún tùy thích<br><br>-Nước chấm: nước mắm+ đường+chanh+tỏi ớt<br><br>- cách làm:<br>• trộn nhân: cho tất cả nguyên liệu vào tô trộn đều<br>• cuốn: trải bánh tráng cho nhân vào và cuốn chặt tay<br>• Chiên: dàu vừa nóng cho chả vào chiên lửa liêu riu, khi vàng vớt ra để ráo dầu<br>• Ăn: cuốn rau + chả giò + chấm mắm "
},

{id:"larb",name:"Gỏi Cuốn",area:"Cuốn tươi tôm thịt, rau sống, bún, chấm mắm đậu",image:"./anhbaocao/goicuon.webp",
congthuc:"<br>--- Nguyên Liệu ---<br><br>Nhân:<br>• 200g tôm luộc<br>• 150g ba chỉ thá mỏng<br>• Bún tươi<br>• Xà lách, rau sống<br><br>- Cuốn:<br>• Bánh tráng mỏng<br><br.- nước chấm đậu phộng:<br>• 2 muỗng bơ đậu phộng<br>• 1 muỗng nước mắm<br>• 1 muỗng đường<br>• Ớt + tỏi băm<br>• ít nước<br><br>- Cách làmm<br>• Chuẩn bị nhân: luộc tôm, thịt và thái sẵn, rau rửa để ráo<br>• Pha nước chấm: đun nhẹ bơ đậu + mắm + đường + nước khuấy tan thêm tỏi ớt<br>• Cuốn: nhúng bánh tráng qua nước trải ra và xếp rau + bún + thịt + tôm cuốn chặt tay<br>• Ăn: chấm tương đậu phộng và thưởng thức"
},

{id:"vitquay",name:"Vịt quay Bắc Kinh",area:"Vịt da giòn, thịt mềm, ăn kèm bánh tráng, dưa leo và sốt đặc trưng",image:"./anhbaocao/vitquaybackinh.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br><br>• 1 con vịt 2-2,5kg<br>• 2 muỗng mật ong<br>• 1 muỗng giấm<br>• 1 muỗng chanh<br>• 1 muỗng rượu trắng<br>• 1 muỗng muối<br>• gừng và hành đập dập<br><br>- Cách làm:<br>• Sơ chế vịt: rửa với nước muối và gừng cho hết hôi<br>• Luộc vịt sơ 2-3phuts với hước sôi<br>• Quét mật ong + giấm + chanh đều lên da vịt<br>• Quay nướng: làm nóng lò 180 độ nướng 35-40p tăng lên 220 độ cho da vịt giòn<br>• Ăn"
},
{id:"mapodauhu",name:"Phật Nhảy Tường",area:"Canh hầm cao cấp, gồm bào ngư, hải sâm, thịt và thảo dược bổ dưỡng",image:"./anhbaocao/phatnhaytuong.png",
congthuc:"<br>--- Nguyên Liệu ---<br>• Đùi gà ta<br>• sườn heo<br>• tôm khô/ mực khô<br>• nấm đông cô<br>• bào ngư<br>• trứng cút<br>• táo tàu/kủ tử<br>• gừng<br>• rượu thiệu hưng<br>• nước hầm ga<br><br>- Cách làm:<br>• Sơ chế: gà + sườn trụng nước sôi<br>• tôm/mực khô ngâm mềm<br>• nấm đông cô ngâm nở<br>• Phi gừng với chút dầu<br>• Thêm 1-2 muỗng rượu<br>• Hầm: ch0 tất cả nguyên liệu vào nồi hầm nhỏ 1,5-2 tiếng <br>• Nêm muối vừa ăn<br>• múc ra chén và thưởng thức"
},
{id:"hau",name:"Mì Cay Nóng Vũ Hán",area:"Mì trộn cay nồng, đậm mùi ớt, tê nhẹ đầu lưỡi",image:"./anhbaocao/vuhan.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• Mì trứng/ mì tươi/mì gói<br>• 2-3 cái móng heo<br>• ớt khô + sa tế<br>• tỏi băm<br>• hành lá, mè rang<br>• nấm kim châm<br>• cải thìa<br>• đậu hủ non<br><br>- Gia vị:<br>• nước tương<br>• dầu hào<br>• hạt nêm<br>• đường<br>• dấm đen<br>• ớt bột Tứ xuyên<br><br>- Cách làm:<br>• Hầm móng heo: trụng với nước sôi thêm chút gừng + muối 30-40p cho mềm<br>• Làm nước sốt cay: phi tỏi+gừng với dầu<br>• cho ớt khô satee vào xào thơm<br>• thêm: 2 muỗng nước tương<br>• 1 muỗng dầu hào<br>• 1,2 muỗng đường<br>• 1 muỗng dấm đen<br>• Cho nấm rau và đầu hủ vào<br>• thả mì nấu chín<br>• cho móng heo vào<br>• rắc hành mè vô và ăn"
},
{id:"lanzhou",name:"Cá Hấp Ớt Lan Châu",area:"Cá hấp mềm, phủ ớt cay và gia vị Tứ Xuyên thơm nồng",image:"./anhbaocao/cahapotgiangtay.webp",
congthuc:"<br>--- Nguyên Liệu ---<br>• Cá nào cũng được<br>• ớt khô + ớt tươi<br>• gừng thái sợi<br>• hành lá, tỏi<br>• nước tương<br>• dầu điều<br>• đường<br>• dầu nóng<br><br>- Cách làm:<br>• cá rửa sạch với muối cho bớt tanh<br>• khứa nhẹ hấp 10-12p<br>• phi tỏi gừng ớt cho thơm<br>• cho 2 muỗng nước tương+ 1 muỗng dầu hào+ xíu đường<br>• rưới hỗn hợp lên cá, thêm hành chan dầu nóng<br>• Ăn"
},
{id:"xiaolongbao",name:"Đậu Phụ Mapo Tứ Xuyên",area:"Đậu phụ sốt cay tê, thịt băm và tiêu hoa tiêu",image:"./anhbaocao/dauphumapotuxuyen.webp",
congthuc:"<br>--- Nguyên Liệu ---<br>• Đậu hũ non<br>• thịt băm<br>• tỏi, gừng, ớt<br>• bợt ớt tứ xuyên<br>• đậu tương cay<br><br>- Cách làm:<br>• phi tỏi+gừng+ớt cho thơm<br>• cho thịt băm vào xào chín<br>• thêm 1,2 chén nước + 1 muỗng nước tương + 1 muỗng dầu hào quậy đều<br>• cho đậu hủ cắt khối vào đun nhẹ lửa 5p cho thâm gia vị<br>• rắc hành + bột tiêu Tứ Xuyên tắt bếp<br>• ăn"
},
{id:"chao",name:"Thịt Kho Đông Pha",area:"Thịt ba chỉ kho mềm rục, béo thơm, màu nâu đỏ hấp dẫn",image:"./anhbaocao/thitkhodongpha.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• Thịt heo ba rọi<br>• gừng, hành lá<br>• đường phèn<br>• nước tương<br>• rượu trắng<br>• tiêu<br><br>- Cách làm:<br>• Thịt ba rọi cắt khối vuông vừa ăn, trụng sơ nuoc sôi<br>• Xếp thịt vào nồi, thêm gừng, hành lá<br>• cho 3 muỗng nước tương + 2 muỗng rượu + 1 muỗng đường phèn + nước xâm xấp<br>• Kho nhỏ lửa 60-90p đến khi thịt mềm nước sệt<br>• có thể ăn chung với cơm trắng"
},
{id:"suon",name:"Mì Dan Dan",area:"Mì trộn cay, sốt mè, thịt băm và ớt dầu",image:"./anhbaocao/midandan.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• Mì trứng<br>• thịt băm<br>• tỏi,gừng,hành lá, đậu phộng rang<br>• Sốt: sate/ớt dầu/giấm đen/ dầu mè<br><br>- cách làm:<br>• Luộc mì để ráo<br>• phi tỏi + gừng sa tế và cho thịt băm vào xào chín<br>• Trộn 1 muỗng xì dầu + 1 muỗng giấm đen+ 1 muỗng đường<br>• cho mì vào tô, chan nước thịt và sốt<br>• trộn đều và ăn"
},
{id:"dumpling",name:"Mì Biang Biang",area:"Mì sợi to bản, dai, trộn ớt dầu và gia vị đậm đà",image:"./anhbaocao/mibiangbiang.png",
congthuc:"<br>--- Nguyên Liệu ---<br>• Mì sợi bản to dẹp<br>• tỏi băm, ớt bột, hành lá<br>• cải thìa<br><br> - Gia vị:<br>• xì dầu<br>• giấm đen<br>• dầu mè<br>• đường<br><br>- Cách làm:<br>• Luộc mì và rau vớt để ráo<br>• rắc lên mì : tỏi +ớt bột+ hành<br>• cham 2 muỗng dầu nóng cho dậy mùi<br>• thêm 1 muỗng xì dầu: 1 muỗng giấm đen <br>• trộn đều và ăn"
},

{id:"padthai",name:"Boat Noodles",area:"Mì nước Thái, nước dùng đậm đà, có thịt bò/heo, viên thịt và rau thơm",image:"./anhbaocao/Boat Noodles.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• Mì gạo<br>• trứng cút<br>• thịt bò viên<br>• giá đỗ<br>• rau thơm<br>• hành phi giòn<br><br>- Nước dùng:<br>• nước hầm xương<br>• nước mắm<br>• xì dầu đen<br>• đường thốt nốt<br>• sate<br><br>- Cách làm:<br>• Nấu nước xương cho tỏi vào thơm<br>• nêm 2 muỗng nước mắm + 1 muỗng xì dầu đen + 1,2 muỗng đường<br>• trụng mì + thịt cho vào tô<br>• chan nước dùng thêm giá và rau ăn kèm<br>• thưởng thức"
},
{id:"tomyum",name:"Gaeng Tai Pla",area:"Cà ri miền Nam Thái, vị mặn cay đặc trưng, nấu với cá và rau củ",image:"./anhbaocao/Gaeng Tai Pla.webp",
congthuc:"<br>--- Nguyên Liệu ---<br>• Cá thu/cá basa<br>• cà tím<br>• đậu đũa<br>• măng chua<br>• ớt/sả/tỏi/hành tím<br><br>- gia vị:<br>• mắm cá<br>• nước mắm<br>• đường thốt nốt<br>• bột cà ri Thái<br><br>_ Cách làm:<br>• Xay ớt + sả + tỏi + hành cho nhuyễn<br>• phi hỗn hợp cho thơm, cho bột cà ri vào<br>• đỗ nước + mắm cá nấu sôi <br>• cho cá và rau vào<br>• nêm nước mắm và nấu 10-15p<br>• vớt ra chén và ăn"
},
{id:"somtam",name:"Kung Ob Woon Sen",area:"Tôm hấp miến, thơm mùi tiêu, gừng và thảo mộc",image:"./anhbaocao/Kung Ob Woon Sen.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• tôm<br>• miếng dong<br>• tỏi, gừng<br>• tiêu, hành lá<br><br>- Gia vị: nước mắm<br>• dầu mè<br>• dầu hào<br>• đường<br><br>- Cách làm:<br>• ngâm miếng mềm<br>• phi tỏi + gừng + tiêu<br>• trộn miếng với 1 muỗng nước mắm + 1 muỗng dầu hào + 1,2 muỗng đường + dầu mè<br>• cho miến xuống nồi xếp tôm lên trên<br>• đậy nắp và hấp 10-12p<br>• rắc hành và thưởng thức"
},
{id:"curry",name:"Khao Moo Daeng",area:"Cơm thịt heo quay, xá xíu, ăn kèm trứng luộc và nước sốt ngọt",image:"./anhbaocao/Khao Moo Daeng.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• thịt heo ba rọi<br>• trứng luộc<br>• dưa leo<br>• cơm trắng<br><br>- Ướp thịt: <br>• xì dầu<br>• dầu hào<br>• mật ong<br>• tỏi, tiêu<br>• màu điều<br><br>- nước sốt:<br>• nước luộc thịt + xì dầu + dầu hào + đường + bột năng<br><br>- Cách làm:<br>• Ướp thịt 30p và cho vào lò nướng 180 độ và cắt lát<br>• nấu nước cốt từ nước luộc thịt + gia vị và cho xíu bột nặng tạo độ sệt<br>• xếp cơm + thịt + trứng cho đẹp mắt <br>• chan sốt lên trên<br>• ăn"
},
{id:"gaengsom",name:"Gaeng Som",area:"Canh chua cay Thái, thường nấu với cá và rau, vị chua rõ",image:"./anhbaocao/Gaeng Som.webp",
congthuc:"<br>--- Nguyên Liệu ---<br>• cá thu/cá basa<br>• bắp cải hoặc đu đủ xanh<br><br>- Gia vị xay:<br>• ớt khô<br>• hành tím<br>• mắm tôm Thái<br>• me chua<br><br>- Cách làm:<br>• Xay ớt + hành + tỏi + mắm <br>• Phi đều hỗn hợp cho vào nước sôi<br>• Cho cá + rau thêm me, nêm nước mắm + xíu đường<br>• Nấu 10p<br>• Ăn với cơm"
},
{id:"kha",name:"Panang Curry",area:"Cà ri đỏ sệt, béo nước cốt dừa, cay nhẹ, thường nấu với thịt",image:"./anhbaocao/Panang Curry.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• Thịt gà/bò/heo<br>• cà ri Panang<br>• nước cốt dừa<br>• lá chanh, ớt đỏ<br><br>- gia vị:<br>• nước mắm<br>• đường thốt nốt<br>• dầu ăn<br><br>- Cách làm:<br>• phi 2 muỗng cà ri Panang với 1,2 chén nước cốt dừa<br>• cho thịt vào xào săn<br>• thêm phần nước cốt dừa còn lại nấu 10p<br>• nêm 1 muỗng nước mắm + 1 muỗng đường và cho lá canh với ớt vào<br>• Sào đến khi sệt<br>• ăn cùng với cơm hoặc chấm bánh mì.."
},
{id:"moo",name:"Sai Krok Isan",area:"Xúc xích lên men vùng Isan, vị chua nhẹ, ăn kèm rau sống",image:"./anhbaocao/Sai Krok Isan.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• Thịt heo xay<br>• mỡ hạt lựu<br>• cơm nguội<br>• tỏi băm, muối, tiêu<br><br>- Cách làm:<br>• trộn thịt mỡ , mỡ, cơm , tỏi , muối tiêu trộn đều<br>• Nhồi vào vỏ xúc xích, buộc đan<br>• ủ nơi ấm 1-2 ngày cho lên men nhẹ<br>• nướng đến khi vàng<br>• có thể ăn ngay"
},
{id:"larb",name:"Larb",area:"Gỏi thịt băm trộn thính, chanh, ớt, bạc hà, cay và thơm",image:"./anhbaocao/Larb.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• Thịt băm(gà/heo/bò)<br>• hành tím<br>• bạc hà<br>• rau mùi<br><br>- Gia vị:<br>• nước mắm<br>• nước cốt chanh<br>• ớt bột<br>• thính gạo<br>• đường <br><br>- Cách làm:<br>• luộc/xào thịt cho chín<br>• trộn 1 muõng nước mắm + 1 muỗng chanh + 1,2 muỗng đường<br>• ớt bột<br>• cho thịt và hành rau vào <br>• rắc thính<br>• trộn đều<br>• và ăn"
},
{id:"Sushi",name:"Sushi",area:"Cơm trộn giấm ăn kèm hải sản tươi sống hoặc chín",image:"./anhbaocao/sushi.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>-  Phần cơm:<br>• 2 chén gạo Nhật (gạo dẻo)<br>• 2,5 chén nước<br>• 3 muỗng giấm gạo<br>• 2 muỗng đường<br>• 1,2 muỗng muối<br><br>- Phần nhân:<br>• Thanh cua, cá hồi, trứng cuộn<br>• Dưa leo<br>• Cà rốt<br>• Bơ<br>• Rong biển cuộn<br>• Wasabi<br>• Nước tương Nhật<br><br>- Cách làm:<br>- Bước 1: Nấu cơm sushi<br>• Vo gạo nấu chín<br>• Trộn giấm + đường + muối và rưới vào cơm nóng<br>• Xới nhẹ cho cơm nguội và bong<br><br>- Bước 2: Chuẩn bị nhân<br>• Cắt tất cả nhân thành sợi dài<br><br>- Bước 3: Cuộn sushi<br>• Trải rong biển lên mành tre<br>• Dàn mỏng cơm<br>• Cho nhân vào<br>• Cuộn chặt tay<br>• Dùng dao ướt cắt khoanh<br>• Ăn"
},

{id:"tomyum",name:"Sashimi",area:"Hải sản tươi sống cắt lát mỏng, không dùng cơm",image:"./anhbaocao/sashimi.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• Cá hồi/ cá ngừ (loại ăn sống)<br>• Wasabi, nước tương Nhật<br>• Gừng hồng<br><br>- Cách làm<br>• Cá rửa nhanh, lau khô để ngăn đá 10-15 phút cho săn lại<br>• Dùng dao thật bén cắt lát xéo dày 0,5cm<br>• Xếp ra đĩa chấm wasabi, nước tương<br>• Thưởng thức liền"
},

{id:"somtam",name:"Takoyaki",area:"Bánh bạch tuộc viên tròn chiên, phủ sốt đặc trưng",image:"./anhbaocao/Takoyaki.jpeg",
congthuc:"<br>--- Nguyên Liệu ---<br><br>- Phần bột:<br>• 100g bột mì<br>• 1 trứng gà<br>• 300ml nước<br>• 1,2 muỗng cà phê muối<br>• 1,2 muỗng cà phê bột nêm<br><br>- Nhân:<br>• Bạch tuột luộc, cắt lựu đạn<br>• Hành lá xắt nhỏ<br>• Gừng đỏ muối<br><br>- Ăn kèm:<br>• Sốt takoyaki<br>• Mayonnaise<br>• Cá bào khô<br>• Rong biển bột<br><br>- Cách làm:<br>• Pha bột:<br>Trộn bột mì + trứng + nước + muối + bột nêm khuấy đều cho mịn, không bón<br>• Làm nóng khuôn takoyaki, quét dầu từng ô<br>• Đổ bột đầy khuôn:<br>Cho bạch tuột và hành lá vào mỗi ô<br>• Khi mặt dưới se  lại, dùng que lật 90-180 độ cho tròn đều<br>• Lăn bánh đều đến khi vàng giòn<br>• Bày ra đĩa và thưởng thức "
},

{id:"curry",name:"Okonomiyaki",area:"Bánh xèo Nhật làm từ bắp cải, trứng và thịt",image:"./anhbaocao/Okonomiyaki.webp",
congthuc:"<br>--- Nguyên Liệu ---<br><br>- Phần bột:<br>• 100g bột mì<br>• 1 trứng gà<br>• 120-150ml nước<br>• 1,2 muỗng cà phê muối/bột nêm<br><br>- Phần nhân:<br>• Bắp cải thái sợi<br>• Hành lá<br>• Thịt ba chỉ/tôm/mực<br>• Có thể thêm phô mai kéo sợi<br><br>- Topping:<br>• Sốt okonomiyaki<br>• Mayonnaise<br>• Cá bào khô<br>• Rong biển bột<br><br>- Cách làm:<br>• Trộn bột + trứng + nước + muối và khuấy cho mịn<br>• Cho bắp cải hành lá vào nhân trộn đều<br>• Đổ hỗn hợp vào chảo chống dính (lửa vừa)tạo hình bánh<br>• Áp chảo 3-4p cho mặt vàng<br>• Rưới sốt và rắc rong biển lên trên mặt bánh<br>• Ăn nóng ngon nhất"
},

{id:"gaengsom",name:"Mì Ramen",area:"Mì nước Nhật với nước dùng đậm đà và thịt",image:"./anhbaocao/ramen.webp",
congthuc:"<br>--- Nguyên Liệu ---<br>- Phần mì:<br>• Mì ramen (hoặc mì trứng/mì không có gia vị)<br><br>- Nước dùng:<br>• 500ml nước<br>• 1 khúc xương heo hoặc ức gà<br>• 1 muỗng canh nước tương<br>• 1 muỗng cà phê dầu mè<br>• 1,2 muỗng cà phê bột nêm<br>• 1 tép tỏi<br>• Gừng cắt lát<br><br>- Topping:<br>• Thịt heo quay/gà/chả cá<br>• Trứng luộc lòng đào<br>• Rong biển<br>• Bắp hạt/nấm<br>• Hành lá<br><br>- Cách làm :<br>• Ninh xương/gà với tỏi và gừng 20-30p<br>• Nêm nước tương và dầu mè bột nêm<br>• Luộc mì riêng cho vào tô<br>• Chan nước dùng<br>• Xếp topping lên trên<br>• Ăn"
},

{id:"kha",name:"Mì Udon",area:"Mì sợi to, mềm, dùng với nước dùng thanh nhẹ",image:"./anhbaocao/Udon.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>- Phần mì:<br>• Mì udon tưới/udon khô<br><br>- Nước dùng:<br>• 500ml nước<br>• 1 muỗng canh nước tương<br>• 1,2 muỗng cà phê bột nêm<br>• 1,2 muỗng cà phê dầu mè<br>• 1 lát gừng<br><br>- Topping:<br>• Thịt bò/gà/tôm<br>• Trứng luộc<br>• Đậu hũ<br>• Rong biển<br>• Hành lá<br><br>- Cách làm:<br>• Đun nước + nước tương + dầu mè + gừng<br>• Luộc mì udon riêng cho vào tô<br>• Cho topping vào nước dùng nấu chín<br>• Chan mì lên nước dùng<br>• Rắc hành lá<br>• Ăn"
},

{id:"moo",name:"Tempura",area:"Hải sản hoặc rau củ tẩm bột chiên giòn",image:"./anhbaocao/Tempura.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>- Bột tempura:<br>• 100g bột mì<br>• Trứng gà<br>• 150ml nước<br>• 1,2 muỗng cà phê muối<br><br>- Phần nhân:<br>• Tôm lột vỏ<br>• Mực/cá<br>• Khoai lang lát mỏng<br>• Bí đỏ/cà rốt/nấm<br>• Dầu ăn<br><br>- Cách làm:<br>• TRộn trứng + nước lạnh cho bột vào khuấy nhẹ<br>• Làm nóng dầu<br>• Nhúng tôm/rau vào bột cho vào chiên<br>• Chiên đến khi vàng nhạt, giòn<br>• Gắp ra thấm dầu<br><br>- Nước chấm:<br>• 2 muỗng nước tương<br>• 1 muỗng nước<br>• chút gừng<br>• chấm và ăn"
},

{id:"larb",name:"Tonkatsu",area:"Thịt heo tẩm bột chiên xù, ăn kèm sốt ngọt mặn",image:"./anhbaocao/Tonkatsu.jpg",
congthuc:"<br>--- Nguyên Liệu ---<br>• Thịt heo cốt lết<br>• muối+tiêu<br>• 1 trứng gà<br>• bột mì<br>• bột chiên xù<br>• dầu ăn<br><br>- Ăn kèm:<br>• Bappws cải bào sợi<br>• Cà chua<br>• Sốt tonkatsu<br><br>- Cách làm:<br>• Dần nhẹ thịt ướp muối tiêu<br>• Lăn thịt qua bột mì - trứng - bột xù<br>• Dầu nóng vừa cho thịt vào chiên 4-5p rồi lật<br>• Khi vàng giòn vớt ra ráo cắt lát<br><br>- Nước sốt pha tại nhà:<br>• 2 muỗng ketchup<br>• 1 muỗng nước tương<br>• 1 muỗng đường<br>• 1,2 muỗng giấm<br>• trộn đều và chấm"
},

];

    const cardContainer = document.getElementById("card-container");
    const searchInput = document.getElementById("searchHome");
    const suggestBox = document.getElementById("suggestBox");

    function renderCards(data) {
        if (!cardContainer) return;
        cardContainer.innerHTML = "";
        data.forEach(mon => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${mon.image}" alt="${mon.name}">
                <h2>${mon.name}</h2>
                <p><b>Mô tả:</b><br>${mon.area}</p>
            `;
            card.addEventListener("click", () => {
                localStorage.setItem("ct", JSON.stringify(mon));
                window.location.href = "congthuc.html";
            });
            cardContainer.appendChild(card);
        });
    }

    renderCards(dsdiadiem);

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const key = searchInput.value.toLowerCase().trim();
            suggestBox.innerHTML = "";

            if (key === "") {
                suggestBox.style.display = "none";
                return;
            }

            const goiY = dsdiadiem.filter(mon => mon.name.toLowerCase().includes(key));

            if (goiY.length === 0) {
                suggestBox.style.display = "none";
                return;
            }

            goiY.forEach(mon => {
                const li = document.createElement("li");
                li.innerHTML = `🍽 ${mon.name}`;
                li.onclick = () => {
                    localStorage.setItem("ct", JSON.stringify(mon));
                    window.location.href = "congthuc.html";
                };
                suggestBox.appendChild(li);
            });
            suggestBox.style.display = "block";
        });
    }


    document.addEventListener("click", (e) => {
        if (suggestBox && !e.target.closest(".search-container")) {
            suggestBox.style.display = "none";
        }
    });
});

function timKiemHome() {
    const key = document.getElementById("searchHome").value.toLowerCase();
}