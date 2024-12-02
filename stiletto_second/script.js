let content_side = document.querySelector(".content_side");
let content_side_2 = document.querySelector(".content_side_2");
let content_side_3 = document.querySelector(".content_side_3");
let html_code = document.querySelector(".html_code");
let html_code_2 = document.querySelector(".html_code_2");
let html_code_3 = document.querySelector(".html_code_3");
let css_code = document.querySelector(".css_code");
let css_code_2 = document.querySelector(".css_code_2");
let css_code_3 = document.querySelector(".css_code_3");
let content_side_4 = document.querySelector(".content_side_4");
let html_code_4 = document.querySelector(".html_code_4");
let css_code_4 = document.querySelector(".css_code_4");
let content_side_5 = document.querySelector(".content_side_5");
let html_code_5 = document.querySelector(".html_code_5");
let css_code_5 = document.querySelector(".css_code_5");
let content_side_6 = document.querySelector(".content_side_6");
let html_code_6 = document.querySelector(".html_code_6");
let css_code_6 = document.querySelector(".css_code_6");
let content_side_7 = document.querySelector(".content_side_7");
let html_code_7 = document.querySelector(".html_code_7");
let css_code_7 = document.querySelector(".css_code_7");
let content_side_8 = document.querySelector(".content_side_8");
let html_code_8 = document.querySelector(".html_code_8");
let css_code_8 = document.querySelector(".css_code_8");
let installation = document.querySelector(".installation");
let input = document.querySelector(".input");
let button = document.querySelector(".button");
let checkbox = document.querySelector(".checkbox");
let radio_group = document.querySelector(".radio_group");
let textarea = document.querySelector(".textarea");
let tooltip = document.querySelector(".tooltip");
let alert_dialog = document.querySelector(".alert_dialog");
let badge = document.querySelector(".badge");
let create_dialog = document.querySelector(".create_dialog");
let menubar = document.querySelector(".menubar");
let micro_card = document.querySelector(".micro_card");
let mini_card = document.querySelector(".mini_card");
let success_message = document.querySelector(".success_message");
let error_message = document.querySelector(".error_message");
let highlight = document.querySelector(".highlight");
let datalist = document.querySelector(".datalist");
let card = document.querySelector(".card");
let list = document.querySelector(".list");
let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let accordion = document.querySelector(".accordion");
let sheet = document.querySelector(".sheet");
let pfp = document.querySelector(".pfp");
let preheader = document.querySelector(".preheader");
let postfooter = document.querySelector(".postfooter");
let error_page = document.querySelector(".error_page");
let register = document.querySelector(".register");
let option = document.querySelector(".option");
let progress_bar = document.querySelector(".progress_bar");
let testimonial = document.querySelector(".testimonial");
let scroll = document.querySelector(".scroll");
let toggle = document.querySelector(".toggle");

let classes = [
  input,
  button,
  checkbox,
  radio_group,
  textarea,
  tooltip,
  alert_dialog,
  badge,
  create_dialog,
  menubar,
  micro_card,
  mini_card,
  success_message,
  error_message,
  highlight,
  datalist,
  installation,
  card,
  list,
  header,
  footer,
  accordion,
  sheet,
  pfp,
  preheader,
  postfooter,
  error_page,
  register,
  option,
  progress_bar,
  testimonial,
  scroll,
  toggle,
];
for (let i = 0; i < classes.length; i++) {
  classes[i].addEventListener("click", () => {
    classes.forEach((el) => {
      el.classList.remove("selected_button");
      classes[i].classList.add("selected_button");
    });
    switch (classes[i].innerText.toLowerCase()) {
      case "installation":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";

        content_side.innerHTML = `
        <h1 class='docs_header'>STILETTO SETUP</h1>`;
        html_code.innerHTML =
          "<p>Getting started is effortless—simply include the default CSS styles and You are ready to go.</p>";

        css_code.innerText = `
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
$base_color: #09090b;
$secondary_color: #fafafa;
$font_color: #a1a1aa;
$component_color: #3464ec;
$touch_color: #27272a;
$success_color: #22c55e;
$error_color: #dc2626;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Outfit", serif;
  scrollbar-width: thin;
  scrollbar-color: $touch_color transparent;
  -ms-overflow-style: scrollbar;
  &::-webkit-scrollbar-thumb {
    border: 5px solid transparent;
    border-radius: 100px;
    background-color: $touch_color;
    background-clip: content-box;
  }
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border: 5px solid transparent;
    border-radius: 100px;
    background-color: $touch_color;
    background-clip: content-box;
  }
}

body {
  background-color: $base_color;
  overflow-x: hidden;
}
ul {
  li {
    list-style-type: none;
    color: $font_color;
    a {
      color: $font_color;
      text-decoration: none;
    }
  }
}`;
        let codeElementssv = document.getElementsByTagName("code");
        for (let i = 0; i < codeElementssv.length; i++) {
          codeElementssv[i].innerHTML = codeElementssv[i].innerHTML.replace(
            /<br\s*\/?>/gi,
            "\n"
          );
          Prism.highlightElement(codeElementssv[i]);
        }
        break;
      case "🟡 input":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
        <input class='input_component' placeholder='input text' type='text'>`;
        content_side_2.innerHTML = `
        <input class='input_component' placeholder='input password' type='password'>`;
        content_side_3.innerHTML = `
 <input
      class="input_component"
      type="search"
      list="languages"
      placeholder="Pick a language"
    />
    <datalist id="languages">
      <option value="PHP" />
      <option value="C++" />
      <option value="Java" />
      <option value="Ruby" />
      <option value="Python" />
      <option value="Go" />
      <option value="Perl" />
      <option value="Erlang" />
    </datalist>
        `;
        content_side_4.innerHTML = `
        <div class="image_upload_component">
<p>Select profile picture</p>
<img
  src="profile-circle-svgrepo-com(2).svg"
  alt="Selected profile picture"
  class="selected_profile_picture"
/>
<button class="file_selector button_component">Browse pictures</button>
<input
  type="file"
  accept="image/*"
  class="get_file"
  style="display: none"
/>
</div>
        `;
        html_code.innerText = `<input class='input_component' placeholder='input text' type='text'>`;
        html_code_2.innerText = `<input class='input_component' placeholder='input password' type='password'>`;
        html_code_3.innerText = `
    <input
        class="input_component"
        type="search"
        list="languages"
        placeholder="Pick a language"
    />
    <datalist id="languages">
        <option value="PHP" />
        <option value="C++" />
        <option value="Java" />
        <option value="Ruby" />
        <option value="Python" />
        <option value="Go" />
        <option value="Perl" />
        <option value="Erlang" />
    </datalist>`;
        html_code_4.innerText = `
<div class="image_upload_component">
    <p>Select profile picture</p>
    <img
        src="profile-circle-svgrepo-com(2).svg"
        alt="Selected profile picture"
        class="selected_profile_picture"
    />
    <button class="file_selector button_component">Browse pictures</button>
    <input
        type="file"
        accept="image/*"
        class="get_file"
        style="display: none"
    />
</div>
`;
        css_code.innerText = `.input_component {
    border: 1px solid $touch_color;
    background-color: transparent;
    color: white;
    padding: 10px;
    border-radius: 5px;
        &:focus { 
            outline: 1px solid $secondary_color;
    }
}`;
        css_code_2.innerText = `.input_component {
    border: 1px solid $touch_color;
    background-color: transparent;
    color: white;
    padding: 10px;
    border-radius: 5px;
         &:focus {
            outline: 1px solid $secondary_color;
    }
}`;
        css_code_4.innerText = `.image_upload_component {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    border: 1px solid gray;
    width: 400px;
    height: 300px;
    padding: 20px;
    border-radius: 4px;
    p {
    color: white;
    }
    .selected_profile_picture {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 200px;
    }
}
`;
        css_code_3.innerText = `.input_component {
    border: 1px solid $touch_color;
    background-color: transparent;
    color: white;
    padding: 10px;
    border-radius: 5px;
             &:focus {
                outline: 1px solid $secondary_color;
    }
}
`;
        let file_selector = document.querySelector(".file_selector"); // Button to open file input
        let get_file = document.querySelector(".get_file"); // Hidden input[type="file"]
        let selected_profile_picture = document.querySelector(
          ".selected_profile_picture"
        );

        // Event listener to open the file input when the button is clicked
        file_selector.addEventListener("click", () => {
          get_file.click();
        });

        // Event listener to update the profile picture after file is selected
        get_file.addEventListener("change", () => {
          const [file] = get_file.files;
          if (file) {
            // If a file is selected, show it
            selected_profile_picture.src = URL.createObjectURL(file);
          } else {
            // If no file is selected, use the default image
            selected_profile_picture.src = "./patka.jpg";
          }
        });
        let codeElements = document.getElementsByTagName("code");
        for (let i = 0; i < codeElements.length; i++) {
          // Zameni <br> tagove sa novim redovima
          codeElements[i].innerHTML = codeElements[i].innerHTML.replace(
            /<br\s*\/?>/gi,
            "\n"
          );

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(codeElements[i]);
        }

        break;
      case "button":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
<button class='button_component'>button</button>`;
        content_side_2.innerHTML = `
<button class='close_button_component'>x</button>`;
        content_side_3.innerHTML = `
<button class='open_button_component'>+</button>`;
        content_side_4.innerHTML = `
<button class='transparent_button_component'>button</button>`;
        content_side_5.innerHTML = `
<div class="horizontal_button_group_component">
  <button class="button_component">button</button>
  <button class="button_component">button</button>
  <button class="button_component">button</button>
</div>`;
        content_side_6.innerHTML = `
<div class="vertical_button_group_component">
  <button class="button_component">button</button>
  <button class="button_component">button</button>
  <button class="button_component">button</button>
</div>`;

        html_code.innerText = `<button class='button_component'>button</button>`;
        html_code_2.innerText = `<button class='close_button_component'>x</button>`;
        html_code_3.innerText = `<button class='open_button_component'>+</button>`;
        html_code_4.innerText = `<button class='transparent_button_component'>button</button>`;
        html_code_5.innerText = `
<div class="horizontal_button_group_component">
  <button class="button_component">button</button>
  <button class="button_component">button</button>
  <button class="button_component">button</button>
</div>`;
        html_code_6.innerText = `
<div class="vertical_button_group_component">
  <button class="button_component">button</button>
  <button class="button_component">button</button>
  <button class="button_component">button</button>
</div>
        `;
        css_code.innerText = `
.button_component {
  background-color: $secondary_color;
  cursor: pointer;
  color: $base_color;
  padding: 10px 20px;
  border: 0;
  border-radius: 5px;
  transition: 0.3s;
  &:focus {
    outline: 1px solid $secondary_color;
  }
}`;
        css_code_2.innerText = `
.close_button_component {
  background-color: transparent;
  cursor: pointer;
  border: 0;
  color: $secondary_color;
  font-size: 1.2rem;
  &:focus {
    outline: 1px solid $secondary_color;
  }
}`;
        css_code_3.innerText = `
.open_button_component {
  background-color: transparent;
  cursor: pointer;
  border: 0;
  color: $secondary_color;
  font-size: 1.2rem;
  &:focus {
    outline: 1px solid $secondary_color;
  }
}`;
        css_code_4.innerText = `
.transparent_button_component {
  background-color: transparent;
  cursor: pointer;
  color: $secondary_color;
  padding: 10px 20px;
  border: 2px solid $touch_color;
  border-radius: 5px;
  transition: 0.3s;
  &:focus {
    outline: 1px solid $secondary_color;
  }
}`;
        css_code_5.innerText = `
.horizontal_button_group_component {
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border-radius: 0;
    &:nth-child(1) {
      border-radius: 4px 0 0 4px;
    }
    &:nth-child(3) {
      border-radius: 0 4px 4px 0;
    }
  }
}`;
        css_code_6.innerText = `
.vertical_button_group_component {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    border-radius: 0;
    &:nth-child(1) {
      border-radius: 4px 4px 0 0;
    }
    &:nth-child(3) {
      border-radius: 0 0 4px 4px;
    }
  }
}`;
        let l = document.getElementsByTagName("code");
        for (let i = 0; i < l.length; i++) {
          // Zameni <br> tagove sa novim redovima
          l[i].innerHTML = l[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(l[i]);
        }
        break;
      case "checkbox":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `<label class='checkbox_component'> <input type='checkbox' /> <span>Checkbox</span></label>`;
        html_code.innerText = `
<label class='checkbox_component'> <input type='checkbox' /> <span>Checkbox</span></label>`;
        css_code.innerText = `
.checkbox_component {
  color: $secondary_color;
  display: flex;
  align-items: center;
input[type="checkbox"] {
  accent-color: $secondary_color;
  background-color: transparent;
  margin-right: 5px;
  }
}`;

        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";

        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";

        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";

        let codeElement = document.getElementsByTagName("code");
        for (let i = 0; i < codeElement.length; i++) {
          // Zameni <br> tagove sa novim redovima
          codeElement[i].innerHTML = codeElement[i].innerHTML.replace(
            /<br\s*\/?>/gi,
            "\n"
          );

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(codeElement[i]);
        }
        break;
      case "radio group":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML =
          "<form class='radio_group_component'><input type='radio' id='html' value='html' name='language'><label for='html'>HTML</label><br><input type='radio' id='css' value='css' name='language'><label for='css'>CSS</label><br><input type='radio' id='javascript' value='javascript' name='language'><label for='javascript'>JAVASCRIPT</label><br></form>";
        html_code.innerText = `
<form class='radio_group_component'>
  <input type='radio' id='html' value='html' name='language'>
  <label for='html'>HTML</label>
  <br>
  <input type='radio' id='css' value='css' name='language'>
  <label for='css'>CSS</label>
  <br>
  <input type='radio' id='javascript' value='javascript' name='language'>
  <label for='javascript'>JAVASCRIPT</label>
  <br>
</form>`;
        css_code.innerText = `
.radio_group_component {
  color: $secondary_color;
  input[type="radio"] {
    accent-color: $touch_color;
}
label {
  padding-left: 15px;
  }
}`;

        let codeElemen = document.getElementsByTagName("code");
        for (let i = 0; i < codeElemen.length; i++) {
          // Zameni <br> tagove sa novim redovima
          codeElemen[i].innerHTML = codeElemen[i].innerHTML.replace(
            /<br\s*\/?>/gi,
            "\n"
          );

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(codeElemen[i]);
        }
        break;
      case "textarea":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `<textarea class='textarea_component' placeholder='textarea'></textarea>`;
        content_side_2.innerHTML = `
                <textarea
      class="non_resize_textarea_component"
      placeholder="Textarea"
    ></textarea>
                `;
        html_code.innerText = `<textarea class='textarea_component' placeholder='textarea'></textarea>`;
        css_code.innerText = `
.textarea_component {
  resize: vertical;
  color: $secondary_color;
  background-color: transparent;
  border: 1px solid $touch_color;
  border-radius: 8px;
  padding: 5px 10px;
  &:focus {
    outline: 1px solid $secondary_color;
  }
}
`;
        html_code_2.innerText = `
<textarea class="non_resize_textarea_component" placeholder="Textarea"></textarea>`;
        css_code_2.innerText = `
.non_resize_textarea_component {
  resize: none;
  color: #fafafa;
  background-color: transparent;
  border: 1px solid #27272a;
  border-radius: 8px;
  padding: 5px 10px;
  &:focus {
    outline: 1px solid #fafafa;
  }
}
`;

        let codeEleme = document.getElementsByTagName("code");
        for (let i = 0; i < codeEleme.length; i++) {
          // Zameni <br> tagove sa novim redovima
          codeEleme[i].innerHTML = codeEleme[i].innerHTML.replace(
            /<br\s*\/?>/gi,
            "\n"
          );

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(codeEleme[i]);
        }
        break;
      case "tooltip":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML =
          "<div class='tooltip_component'>Tooltip content</div>";

        break;
      case "🟡 alert dialog":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
        <button class='button_component' onclick="openDialog()">Show dialog</button>
        <dialog class='alert_dialog_component'>
        <div class='alert_dialog_content'>
          <p>This is a dialog</p>
          <form method='dialog'>
            <div class='dialog_buttons'>
              <button class='button_component'>Accept</button>
              <button class='button_component'>Decline</button>
            </div>
          </form>
          </div>
        </dialog>`;
        html_code.innerText = `
<button class='button_component' onclick="openDialog()">Show dialog</button>
<dialog class='alert_dialog_component'>
  <p>This is a dialog</p>
  <form method='dialog'>
    <div class='dialog_buttons'>
      <button>Accept</button>
      <button>Decline</button>
    </div>
  </form>
</dialog>`;
        css_code.innerText = `
.alert_dialog_component {
  width: 500px;
  height: 300px;
  background-color: $touch_color;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0 !important;
  border-radius: 4px;
  padding: 10px;
  &::backdrop {
    backdrop-filter: blur(10px);
  }
  .alert_dialog_content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    p {
      color: $secondary_color;
    }
    .dialog_buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
}
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}`;
        let gv = document.getElementsByTagName("code");
        for (let i = 0; i < gv.length; i++) {
          // Zameni <br> tagove sa novim redovima
          gv[i].innerHTML = gv[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(gv[i]);
        }
        break;

      case "badge":
        content_side.innerHTML = `<span class='badge_component'>Badge</span>`;
        content_side_2.innerHTML = `<span class='gold_badge_component'>Gold badge</span>`;
        content_side_3.innerHTML = `<span class='diamond_badge_component'>Diamond badge</span>`;
        content_side_4.innerHTML = `<span class='verified_badge_component'>Verified badge</span>`;
        content_side_5.innerHTML = `<span class="simple_verified_badge_component">Verified</span>`;
        content_side_6.innerHTML = `<span class="simple_danger_badge_component">Danger</span>`;
        content_side_7.innerHTML = `<span class="simple_warning_badge_component">Warning</span>`;

        html_code.innerText = `<span class='badge_component'>Badge</span>`;
        html_code_2.innerText = `<span class='gold_badge_component'>Gold badge</span>`;
        css_code_2.innerText = `
.gold_badge_component {
  width: fit-content;
  background-color: white;
  padding: 5px 10px;
  border-radius: 20px;
}
.gold_badge_component {
  background: rgb(195, 88, 34);
  background: -moz-linear-gradient(
    93deg,
    rgba(195, 88, 34, 1) 0%,
    rgba(253, 202, 45, 1) 100%
  );
  background: -webkit-linear-gradient(
    93deg,
    rgba(195, 88, 34, 1) 0%,
    rgba(253, 202, 45, 1) 100%
  );
  background: linear-gradient(
    93deg,
    rgba(195, 88, 34, 1) 0%,
    rgba(253, 202, 45, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c35822",endColorstr="#fdca2d",GradientType=1);
}`;
        html_code_3.innerText = `<span class='diamond_badge_component'>Diamond badge</span>`;

        css_code_3.innerText = `
.diamond_badge_component {
  width: fit-content;
  background-color: white;
  padding: 5px 10px;
  border-radius: 20px;
}
.diamond_badge_component {
  background: rgb(34, 193, 195);
  background: -moz-linear-gradient(
    93deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(45, 112, 253, 1) 100%
  );
  background: -webkit-linear-gradient(
    93deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(45, 112, 253, 1) 100%
  );
  background: linear-gradient(
    93deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(45, 112, 253, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#22c1c3",endColorstr="#2d70fd",GradientType=1);
}`;

        html_code_4.innerText = `<span class='verified_badge_component'>Verified badge</span>`;
        css_code_4.innerText = `
.verified_badge_component {
  width: fit-content;
  background-color: white;
  padding: 5px 10px;
  border-radius: 20px;
}
.verified_badge_component {
  background: rgb(43, 150, 83);
  background: -moz-linear-gradient(
    93deg,
    rgba(43, 150, 83, 1) 0%,
    rgba(87, 253, 45, 1) 100%
  );
  background: -webkit-linear-gradient(
    93deg,
    rgba(43, 150, 83, 1) 0%,
    rgba(87, 253, 45, 1) 100%
  );
  background: linear-gradient(
    93deg,
    rgba(43, 150, 83, 1) 0%,
    rgba(87, 253, 45, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2b9653",endColorstr="#57fd2d",GradientType=1);
}`;
        html_code_5.innerText = `<span class="simple_verified_badge_component">Verified</span>`;
        css_code_5.innerText = `
.simple_verified_badge_component {
  background-color: #021b2a;
  border: 2px solid #024b41;
  color: #00dc82;
  width: fit-content;
  padding: 3px 8px;
  border-radius: 4px;
}`;
        html_code_6.innerText = `<span class="simple_danger_badge_component">Danger</span>`;
        css_code_6.innerText = `
.simple_danger_badge_component {
  background-color: #2a0202; // Dark red background
  border: 2px solid #4b0202; // Red border
  color: #dc0000; // Bright red text
  width: fit-content;
  padding: 3px 8px;
  border-radius: 4px;
}`;
        html_code_7.innerText = `<span class="simple_warning_badge_component">Warning</span>`;
        css_code_7.innerText = `
.simple_warning_badge_component {
  background-color: #2a1b02; // Dark orange background
  border: 2px solid #7e6700; // Orange border
  color: #dc8200; // Bright orange text
  width: fit-content;
  padding: 3px 8px;
  border-radius: 4px;
}`;
        css_code.innerText = `
.badge_component {
  width: fit-content;
  background-color: white;
  padding: 5px 10px;
  border-radius: 20px;
}`;
        let g = document.getElementsByTagName("code");
        for (let i = 0; i < g.length; i++) {
          // Zameni <br> tagove sa novim redovima
          g[i].innerHTML = g[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(g[i]);
        }
        break;
      case "create dialog":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML =
          "<div class='create_dialog_component'>Create dialog content</div>";
        break;
      case "menubar":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML =
          "<nav class='menubar_component'> <p>Home</p> <p>Dashboard</p> <p>Forum</p> <p>Profile</p> </nav>";
        html_code.innerText = `
<nav class='menubar_component'>
  <p>Home</p>
  <p>Dashboard</p>
  <p>Forum</p>
  <p>Profile</p>
</nav>`;
        css_code.innerText = `
.menubar_component {
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border: 1px solid $touch_color;
padding: 10px 20px;
border-radius: 5px;
  p {
    color: $secondary_color;
    cursor: pointer;
  }
}`;
        let c22 = document.getElementsByTagName("code");
        for (let i = 0; i < c22.length; i++) {
          // Zameni <br> tagove sa novim redovima
          c22[i].innerHTML = c22[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(c22[i]);
        }
        break;
      case "micro card":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML =
          "<div class='micro_card_component'><img src='circle.svg' alt='micro card content'><p>Micro card</p></div>";
        html_code.innerText = `
<div class='micro_card_component'>
  <img src='circle.svg' alt='micro card content'>
  <p>Micro card</p>
</div>`;
        css_code.innerText = `
.micro_card_component {
  padding: 10px 20px;
  background-color: $secondary_color;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  img {
    width: 20px;
  }
}`;
        let c2 = document.getElementsByTagName("code");
        for (let i = 0; i < c2.length; i++) {
          // Zameni <br> tagove sa novim redovima
          c2[i].innerHTML = c2[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(c2[i]);
        }
        break;
      case "mini card":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML =
          "<div class='mini_card_component'><img src='circle.svg' alt='mini card content'><p>Mini card</p><span>this is a circle, thats it, also circles are better than squares</span></div> ";
        content_side_2.innerHTML = `
        <div class='mini_card_component'> <div class='mcc_wrapper'><img src='circle.svg' alt='mini card content'><p>Mini card</p></div><span>this is a circle, thats it, also circles are better than squares</span></div>`;
        html_code.innerText = `
<div class='mini_card_component'>
  <img src='circle.svg' alt='mini card content'>
  <p>Mini card</p>
  <span>this is a circle, thats it, also circles are better than squares</span>
</div>`;
        html_code_2.innerText = `
<div class='mini_card_component'>
  <div class='mcc_wrapper'>
    <img src='circle.svg' alt='mini card content'>
    <p>Mini card</p>
  </div>
<span>this is a circle, thats it, also circles are better than squares</span>
</div>`;
        css_code.innerText = `
.mini_card_component {
  padding: 10px 20px;
  background-color: $secondary_color;
  border-radius: 5px;
  gap: 10px;
  p {
    margin: 5px 0;
  }
  span {
    display: block;
    max-width: 25ch !important;
    color: $touch_color;
  }
  img {
    width: 30px;
  }
}`;
        css_code_2.innerText = `
.mini_card_component {
  padding: 10px 20px;
  background-color: $secondary_color;
  border-radius: 5px;
  gap: 10px;
  p {
    margin: 5px 0;
  }
  span {
    display: block;
    max-width: 25ch !important;
    color: $touch_color;
  }
  img {
    width: 30px;
  }
  .mcc_wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 10px;
  }
}`;

        let c3 = document.getElementsByTagName("code");
        for (let i = 0; i < c3.length; i++) {
          // Zameni <br> tagove sa novim redovima
          c3[i].innerHTML = c3[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(c3[i]);
        }
        break;
      case "success message":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML =
          '<p class="success_message_component">success message</p>';

        html_code.innerText = `
<p class="success_message_component">success message</p>`;
        css_code.innerText = `
.success_message_component {
  color: $success_color;
}`;
        let c11 = document.getElementsByTagName("code");
        for (let i = 0; i < c11.length; i++) {
          // Zameni <br> tagove sa novim redovima
          c11[i].innerHTML = c11[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(c11[i]);
        }
        break;
      case "error message":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML =
          '<p class="error_message_component">error message</p>';

        html_code.innerText = `
<p class="error_message_component">error message</p>`;
        css_code.innerText = `
.error_message_component {
  color: $error_color;
}`;
        let c1 = document.getElementsByTagName("code");
        for (let i = 0; i < c1.length; i++) {
          // Zameni <br> tagove sa novim redovima
          c1[i].innerHTML = c1[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(c1[i]);
        }
        break;
      case "highlight":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `<p class="highlight_text">This is some <span class="highlight_component">random</span> text</p>`;
        content_side_2.innerHTML = `<p class="highlight_text">This is some <span class="solid_underline_highlight_component">random</span> text</p>`;
        content_side_3.innerHTML = `<p class="highlight_text">This is some <span class="dashed_underline_highlight_component">random</span> text</p>`;
        content_side_4.innerHTML = `<p class="highlight_text">This is some <span class="dashed_rounded_highlight_component">random</span> text</p>`;
        content_side_5.innerHTML = `<p class="highlight_text">This is some <span class="solid_rounded_highlight_component">random</span> text</p>`;

        html_code.innerText = `<p>This is some <span class="highlight_component">random</span> text</p>`;
        html_code_2.innerText = `<p>This is some <span class="solid_underline_highlight_component">random</span> text</p>`;
        html_code_3.innerText = `<p>This is some <span class="dashed_underline_highlight_component">random</span> text</p>`;
        html_code_4.innerText = `<p>This is some <span class="dashed_rounded_highlight_component">random</span> text</p>`;
        html_code_5.innerText = `<p>This is some <span class="solid_rounded_highlight_component">random</span> text</p>`;

        css_code.innerText = `
.highlight_component {
  background-color: $secondary_color;
  color: $base_color;
  padding: 1px 3px;
  border-radius: 4px;
}`;
        css_code_2.innerText = `
.dashed_rounded_highlight_component {
  color: $secondary_color;
  padding: 1px 3px;
  border-radius: 2px;
  border: 2px dashed $secondary_color;
}`;
        css_code_3.innerText = `
.solid_rounded_highlight_component {
  color: $secondary_color;
  padding: 1px 3px;
  border-radius: 4px;
  border: 2px solid $secondary_color;
}`;
        css_code_4.innerText = `
.solid_underline_highlight_component {
  text-decoration: underline 2px solid $secondary_color;
}`;
        css_code_5.innerText = `
.dashed_underline_highlight_component {
  text-decoration: underline 2px dashed $secondary_color;
}`;
        let hh = document.getElementsByTagName("code");
        for (let i = 0; i < hh.length; i++) {
          // Zameni <br> tagove sa novim redovima
          hh[i].innerHTML = hh[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(hh[i]);
        }
        break;
      case "datalist":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML =
          "<div class='datalist_component'> <div class='datalist_row'> <span class='datalist_key'>key</span> <span class='datalist_value'>value</span> </div> <div class='datalist_row'> <span class='datalist_key'>key</span> <span class='datalist_value'>value</span> </div><div class='datalist_row'> <span class='datalist_key'>key</span> <span class='datalist_value'>value</span> </div> </div>";

        html_code.innerText = `
<div class='datalist_component'>
  <div class='datalist_row'>
    <span class='datalist_key'>key</span>
    <span class='datalist_value'>value</span>
  </div>
  <div class='datalist_row'>
    <span class='datalist_key'>key</span>
    <span class='datalist_value'>value</span>
  </div>
  <div class='datalist_row'>
    <span class='datalist_key'>key</span>
    <span class='datalist_value'>value</span>
  </div>
</div>`;
        css_code.innerText = `
.datalist_component {
  border: 2px solid $touch_color;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  .datalist_row {
    display: flex;
    align-items: center;
    justify-content: space-between !important;
    width: 200px;
    padding: 5px;
    .datalist_key {
      width: 50% !important;
      color: $font_color;
    }
    .datalist_value {
      color: $secondary_color;
      width: 50%;
    }
  }
}`;
        let c111 = document.getElementsByTagName("code");
        for (let i = 0; i < c111.length; i++) {
          // Zameni <br> tagove sa novim redovima
          c111[i].innerHTML = c111[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(c111[i]);
        }
        break;
      case "card":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
            <div class="product_card_component">
              <div class="product_card_image">
                <img
                  src="https://ik.imagekit.io/ks1jccgtg/cal-newport-digitalni-minimalizam-slika-222962429.jpg?updatedAt=1731171621177"
                  alt="article"
                />
              </div>
              <p class="product_card_title">
                Digitalni minimalizam, Kal Njuport Digitalni minimalizam, Kal Njuport
              </p>
              <div class="product_card_data">
                <p class="badge_component">NEW</p>
                <p class="verified_badge_component">120$</p>
              </div>
            </div>
                    `;
        html_code.innerText = `
<div class="product_card_component">
  <div class="product_card_image">
    <img
      src="https://ik.imagekit.io/ks1jccgtg/cal-newport-digitalni-minimalizam-slika-222962429.jpg?updatedAt=1731171621177"
      alt="article"
    />
  </div>
  <p class="product_card_title">Digitalni minimalizam, Kal Njuport Digitalni minimalizam, Kal Njuport</p>
    <div class="product_card_data">
      <p class="badge_component">NEW</p>
      <p class="verified_badge_component">120$</p>
    </div>
</div>`;
        css_code.innerText = `
.product_card_component {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background-color: $touch_color;
  gap: 10px;
  padding-bottom: 10px;
  width: 300px;
  height: 320px;
  .product_card_title {
    padding-left: 5px;
    color: $secondary_color;
  }
  .product_card_image {
    width: 100%;
    height: 200px;
    img {
      border-radius: 7px 7px 0 0;
      width: 100%;
      height: 100%;
      object-fit: cover; // Promenili smo sa contain na cover
      object-position: top;
      display: block;
    }
  }
  .product_card_data {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3px;
    padding-left: 5px;
  }
}`;
        let codeElem = document.getElementsByTagName("code");
        for (let i = 0; i < codeElem.length; i++) {
          // Zameni <br> tagove sa novim redovima
          codeElem[i].innerHTML = codeElem[i].innerHTML.replace(
            /<br\s*\/?>/gi,
            "\n"
          );

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(codeElem[i]);
        }
        break;
      case "list":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
      <ul class='list_component'>
         <li>first</li>
         <li>second</li>
         <li>third</li>
      </ul>`;
        content_side_2.innerHTML = `
<ol class='ordered_list_component'>
         <li>first</li>
         <li>second</li>
         <li>third</li>
      </ol>
        `;
        html_code.innerText = `
<ul class='list_component'>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>`;
        html_code_2.innerText = `
<ol class='ordered_list_component'>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ol>`;
        css_code.innerText = `
.list_component {
  li {
    color: $secondary_color;
    list-style-type: disc;
    &::marker {
      color: $font_color;
    }
  }
}`;
        css_code_2.innerText = `
.ordered_list_component {
li {
  color: $secondary_color;
  &::marker {
    color: $font_color;
  }
  }
}`;
        let pp = document.getElementsByTagName("code");
        for (let i = 0; i < pp.length; i++) {
          // Zameni <br> tagove sa novim redovima
          pp[i].innerHTML = pp[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(pp[i]);
        }
        break;
      case "header":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
<header class="header_component">
  <nav>
    <div class="logo">
      <a href="index.html">LOGO</a>
    </div>
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">Skills</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Connect</a></li>
    </ul>
  </nav>
</header>`;

        html_code.innerText = `
<header class="header_component">
  <nav>
    <div class="logo">
      <a href="index.html">LOGO</a>
    </div>
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">Skills</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Connect</a></li>
    </ul>
  </nav>
</header>`;

        css_code.innerText = `
.header_component {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #09090b;
  z-index: 1;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    #menu-toggle {
      display: none;
      &:checked ~ .menu {
        transform: scale(1, 1);
      }
    }
    .menu {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      a {
        display: block;
        padding: 7px 15px;
        font-size: 17px;
        font-weight: 500;
        color: #fff;
      }
    }
  }
  .logo {
    a {
      font-weight: bold;
      text-decoration: none;
      font-size: 1.8rem;
      color: #fff;
    }
    .menu-icon {
      display: none;
    }
  }
}

@media only screen and (max-width: 950px) {
  .menu {
    flex-direction: column;
    background-color: #09090b;
    align-items: start;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 1;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
    a {
      margin-left: 15px;
    }
    li {
      margin-bottom: 10px;
    }
  }

  .menu-icon {
    display: block;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
  }
}`;
        let psp = document.getElementsByTagName("code");
        for (let i = 0; i < psp.length; i++) {
          // Zameni <br> tagove sa novim redovima
          psp[i].innerHTML = psp[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(psp[i]);
        }
        break;
      case "footer":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
                  <footer class="footer_component">
      <a href="#" class="footer_logo">LOGO</a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Connect</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </footer>
              `;
        html_code.innerText = `
<footer class="footer_component">
  <a href="#" class="footer_logo">LOGO</a>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Skills</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Connect</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms and Conditions</a></li>
    <li><a href="#">Support</a></li>
  </ul>
</footer>`;
        css_code.innerText = `
.footer_component {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  .footer_logo {
    font-weight: bold;
    text-decoration: none;
    font-size: 1.8rem;
    color: #fff;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    li {
      text-align: center;
      a {
        color: white;
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
    ul {
      flex-wrap: wrap;
    }
  }
}`;
        let psps = document.getElementsByTagName("code");
        for (let i = 0; i < psps.length; i++) {
          // Zameni <br> tagove sa novim redovima
          psps[i].innerHTML = psps[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(psps[i]);
        }
        break;
      case "accordion":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
                    <div class="accordion_component">
      <div class="accordion_qna_wrapper">
        <details class="question">
          <summary>this is question one.</summary>
        </details>
        <p class="answer">this is answer one.</p>
      </div>
      <div class="accordion_qna_wrapper">
        <details class="question">
          <summary>this is question two.</summary>
        </details>
        <p class="answer">this is answer two.</p>
      </div>
      <div class="accordion_qna_wrapper">
        <details class="question">
          <summary>this is question three.</summary>
        </details>
        <p class="answer">
          this is answer three. this is answer three. this is answer three. this
          is answer three. this is answer three. this is answer three. this is
          answer three.
        </p>
      </div>
    </div>
                `;
        html_code.innerText = `
<div class="accordion_component">
  <div class="accordion_qna_wrapper">
    <details class="question">
      <summary>this is question one.</summary>
    </details>
    <p class="answer">this is answer one.</p>
  </div>
  <div class="accordion_qna_wrapper">
    <details class="question">
      <summary>this is question two.</summary>
    </details>
    <p class="answer">this is answer two.</p>
  </div>
  <div class="accordion_qna_wrapper">
    <details class="question">
      <summary>this is question three.</summary>
    </details>
    <p class="answer">
      this is answer three. this is answer three. this is answer three. this
      is answer three. this is answer three. this is answer three. this is
      answer three.
    </p>
  </div>
</div>`;
        css_code.innerText = `
.accordion_component {
  width: fit-content;
  .accordion_qna_wrapper {
    border-bottom: 1px solid white;
  }
  .answer {
    visibility: hidden;
    animation: animation2 0.2s forwards;
    max-width: 80ch;
  }
  summary {
    color: white;
    list-style-type: none;
    padding: 20px;
    transition: 0.3s;
    cursor: pointer;
  }
  details[open] + p {
    visibility: visible;
    color: gray;
    padding: 20px;
    animation: animation 0.2s forwards;
  }
}
@keyframes animation {
  0% {
    margin-top: -30px;
  }
  100% {
    margin-top: -10px;
  }
}
@keyframes animation2 {
  0% {
    margin-top: -10px;
  }
  100% {
    margin-top: -30px;
  }
}`;
        let vaa = document.getElementsByTagName("code");
        for (let i = 0; i < vaa.length; i++) {
          // Zameni <br> tagove sa novim redovima
          vaa[i].innerHTML = vaa[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(vaa[i]);
        }

        break;
      case "sheet":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
                      <div class="sheet_component">
      <button class="open_sheet button_component">Open sheet</button>
      <div class="sheet_blur"></div>
      <div class="sheet_content">
        <button class="close_button_component close_sheet">x</button>
        <p>
          this is some random text that is used to fill out sheet component, you
          can also click outside the sheet component to close it.
        </p>
      </div>
    </div>
                  `;
        html_code.innerText = `
<div class="sheet_component">
  <button class="open_sheet button_component">Open sheet</button>
  <div class="sheet_blur"></div>
  <div class="sheet_content">
    <button class="close_button_component close_sheet">x</button>
    <p>
      this is some random text that is used to fill out sheet component, you
      can also click outside the sheet component to close it.
    </p>
  </div>
</div>`;
        css_code.innerText = `
.sheet_component {
  .sheet_content {
    position: absolute;
    width: 300px;
    height: 100vh;
    right: 0;
    top: 0;
    background-color: #09090b;
    border-left: 1px solid gray;
    color: white;
    display: flex;
    align-items: flex-start;
    visibility: hidden;
    padding: 20px;
    z-index: 20;
    .close_sheet {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .sheet_blur {
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(5px);
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  @keyframes display_sheet_animation {
    0% {
      transform: translateX(400px);
      visibility: visible;
    }
    100% {
      transform: translateX(0);
      visibility: visible;
    }
  }
  @keyframes hide_sheet_animation {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(400px);
    }
  }
  .view {
    animation: display_sheet_animation 0.15s forwards linear;
  }
  .hide {
    animation: hide_sheet_animation 0.15s forwards linear;
  }
}`;

        let aa = document.getElementsByTagName("code");
        for (let i = 0; i < aa.length; i++) {
          // Zameni <br> tagove sa novim redovima
          aa[i].innerHTML = aa[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(aa[i]);
        }

        let open_sheet = document.querySelector(".open_sheet");
        let close_sheet = document.querySelector(".close_sheet");
        let sheet_1 = document.querySelector(".sheet_content");
        let sheet_blur = document.querySelector(".sheet_blur");
        open_sheet.addEventListener("click", () => {
          sheet_1.classList.add("view");
          sheet_1.classList.remove("hide");
          sheet_blur.style.display = "block";
        });
        close_sheet.addEventListener("click", () => {
          sheet_1.classList.remove("view");
          sheet_1.classList.add("hide");
          sheet_blur.style.display = "none";
        });
        break;
      case "profile picture":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";

        content_side.innerHTML = `
                  <img
      src="https://ik.imagekit.io/ks1jccgtg/avatar4.jpg?updatedAt=1726309158660"
      alt="User avatar"
      class="avatar_component"
    />
    
              `;
        content_side_2.innerHTML = `
    <div class="avatar_with_name_component">
      <img
        src="https://ik.imagekit.io/ks1jccgtg/avatar6.jpg?updatedAt=1726309158280"
        alt="User avatar"
      />
      <p>User #2033</p>
    </div>          
              `;
        html_code.innerText = `
<img
  src="https://ik.imagekit.io/ks1jccgtg/avatar4.jpg?updatedAt=1726309158660"
  alt="User avatar"
  class="avatar_component"
/>`;
        html_code_2.innerText = `
<div class="avatar_with_name_component">
  <img
    src="https://ik.imagekit.io/ks1jccgtg/avatar6.jpg?updatedAt=1726309158280"
    alt="User avatar"
  />
  <p>User #2033</p>
</div>`;
        css_code.innerText = `
.avatar_component {
  width: 55px;
  height: 55px;
  border-radius: 50px;
  object-fit: cover;
}`;
        css_code_2.innerText = `
.avatar_with_name_component {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: fit-content;
  p {
    color: white;
  }
  img {
    width: 55px;
    height: 55px;
    border-radius: 50px;
    object-fit: cover;
  }
}`;

        let codeEles = document.getElementsByTagName("code");
        for (let i = 0; i < codeEles.length; i++) {
          // Zameni <br> tagove sa novim redovima
          codeEles[i].innerHTML = codeEles[i].innerHTML.replace(
            /<br\s*\/?>/gi,
            "\n"
          );

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(codeEles[i]);
        }
        break;
      case "preheader":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
<div class="pre_header_component">
  <p>Welcome to the greatest website of all times.</p>
</div>
                `;
        html_code.innerText = `
<div class="pre_header_component">
  <p>Welcome to the greatest website of all times.</p>
</div>`;
        css_code.innerText = `
.pre_header_component {
  width: 100%;
  padding: 10px;
  text-align: center;
  p {
    color: white;
  }
}`;
        let codeEle = document.getElementsByTagName("code");
        for (let i = 0; i < codeEle.length; i++) {
          // Zameni <br> tagove sa novim redovima
          codeEle[i].innerHTML = codeEle[i].innerHTML.replace(
            /<br\s*\/?>/gi,
            "\n"
          );

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(codeEle[i]);
        }
        break;
      case "postfooter":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
                  <div class="post_footer_component">
      <p>Copyright © 2024</p>
    </div>
              `;
        html_code.innerText = `
<div class="post_footer_component">
  <p>Copyright © 2024</p>
</div>`;
        css_code.innerText = `
.post_footer_component {
  width: 100%;
  padding: 10px;
  text-align: center;
  p {
    color: gray;
  }
}`;
        let codeEl = document.getElementsByTagName("code");
        for (let i = 0; i < codeEl.length; i++) {
          // Zameni <br> tagove sa novim redovima
          codeEl[i].innerHTML = codeEl[i].innerHTML.replace(
            /<br\s*\/?>/gi,
            "\n"
          );

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(codeEl[i]);
        }
        break;
      case "error page":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
                    <div class="error_page_component">
      <h1 class="error_code">404 :(</h1>
      <p class="error_message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" class="error_back_home">Go Back Home</a>
    </div>
                `;
        html_code.innerText = `
<div class="error_page_component">
  <h1 class="error_code">404 :(</h1>
  <p class="error_message">Oops! The page you're looking for doesn't exist.</p>
  <a href="/" class="error_back_home">Go Back Home</a>
</div>`;
        css_code.innerText = `
.error_page_component {
  h1 {
    color: white;
  }
  p {
    color: gray;
  }
  a {
    position: absolute;
    background-color: white;
    cursor: pointer;
    color: black;
    padding: 10px 20px;
    border: 0;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
  }
}`;
        let codeEls = document.getElementsByTagName("code");
        for (let i = 0; i < codeEls.length; i++) {
          // Zameni <br> tagove sa novim redovima
          codeEls[i].innerHTML = codeEls[i].innerHTML.replace(
            /<br\s*\/?>/gi,
            "\n"
          );

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(codeEls[i]);
        }
        break;
      case "register":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
<div class="login_form_component">
  <h1>Log in to your account</h1>
  <input placeholder="Username" type="text" class="input_component" />
  <input placeholder="Password" type="password" class="input_component" />
  <button class="button_component">Log in</button>
  <a href="#" class="forgot_password_link">Forgot Password?</a>
</div>
                `;
        html_code.innerText = `
<div class="login_form_component">
  <h1>Log in to your account</h1>
  <input placeholder="Username" type="text" class="input_component" />
  <input placeholder="Password" type="password" class="input_component" />
  <button class="button_component">Log in</button>
  <a href="#" class="forgot_password_link">Forgot Password?</a>
</div>`;
        css_code.innerText = `
.login_form_component {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  h1 {
    text-align: center;
    color: white;
  }
  input,
  button {
    width: 95%;
    max-width: 720px;
  }
  a {
    color: gray;
    text-decoration: none;
  }
}
    `;
        let codeE = document.getElementsByTagName("code");
        for (let i = 0; i < codeE.length; i++) {
          // Zameni <br> tagove sa novim redovima
          codeE[i].innerHTML = codeE[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(codeE[i]);
        }
        break;
      case "option":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
          <select class="select_component">
<option selected value="0">Select option</option>
<option value="1">option 1</option>
<option value="2">option 2</option>
<option value="3">option 3</option>
</select>
      `;
        html_code.innerText = `
<select class="select_component">
  <option selected value="0">Select option</option>
  <option value="1">option 1</option>
  <option value="2">option 2</option>
  <option value="3">option 3</option>
</select>
      `;
        css_code.innerText = `
.select_component {
  appearance: none;
  border: 0;
  outline: 0;
  padding: 10px 15px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  background-color: #09090b;
  border: 1px solid #27272a;
  &::-ms-expand {
    display: none;
  }
  &:focus {
   outline: 1px solid white;
  }
  option {
    background-color: #09090b;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}`;
        let code = document.getElementsByTagName("code");
        for (let i = 0; i < code.length; i++) {
          // Zameni <br> tagove sa novim redovima
          code[i].innerHTML = code[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(code[i]);
        }
        break;
      case "progress bar":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
<div class="progress_component">
  <div class="progress_value"></div>
</div>
        `;
        html_code.innerText = `
<div class="progress_component">
  <div class="progress_value"></div>
</div>
        `;
        css_code.innerText = `
.progress_component {
  width: 300px;
  height: 25px;
  border: 1px solid gray;
  background-color: black;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  .progress_value {
    width: 90% !important;
    height: 100%;
    background-color: white;
  }
}`;
        let cod = document.getElementsByTagName("code");
        for (let i = 0; i < cod.length; i++) {
          // Zameni <br> tagove sa novim redovima
          cod[i].innerHTML = cod[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(cod[i]);
        }
        break;
      case "testimonial":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
<div class="testimonial_component">
  <p class="testimonial_content">
    The moment I used Nuxt for the first time I felt in love with it. Apart
    from its scalability, performance and developer experience, the team
    behind of it is also fantastic. Thanks for developing such a great
    framework and making our lives much easier!
  </p>
<div class="testimonial_information">
  <div class="testimonial_image_side">
    <img
      src="https://ik.imagekit.io/ks1jccgtg/testimonial.jpg?updatedAt=1732903448698"
      alt="testimonial image"
    />
  </div>
  <div class="testimonial_text_side">
      <p>Addy Osmani</p>
      <p>Chief Engineer of Chrome</p>
    </div>
  </div>
</div>
          `;
        html_code.innerText = `
<div class="testimonial_component">
  <p class="testimonial_content">
    The moment I used Nuxt for the first time I felt in love with it. Apart
    from its scalability, performance and developer experience, the team
    behind of it is also fantastic. Thanks for developing such a great
    framework and making our lives much easier!
  </p>
  <div class="testimonial_information">
  <div class="testimonial_image_side">
    <img
      src="https://ik.imagekit.io/ks1jccgtg/testimonial.jpg?updatedAt=1732903448698"
      alt="testimonial image"
    />
  </div>
  <div class="testimonial_text_side">
    <p>Addy Osmani</p>
    <p>Chief Engineer of Chrome</p>
    </div>
  </div>
</div>
          `;
        css_code.innerText = `
.testimonial_component {
  width: 350px;
  height: fit-content;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: #09090b;
  display: flex;
  border: 1px solid gray;
  color: gray;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
    .testimonial_information {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    .testimonial_image_side {
      img {
        border-radius: 50px;
        width: 45px;
        height: 45px;
    }
  }
  .testimonial_text_side {
      p {
      &:nth-child(1) {
        color: white;
        }
      }
    }
  }
}`;
        let co = document.getElementsByTagName("code");
        for (let i = 0; i < co.length; i++) {
          // Zameni <br> tagove sa novim redovima
          co[i].innerHTML = co[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(co[i]);
        }
        break;
      case "scroll":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
              <div class="scrollable_component">
<p>v1.1</p>
<p>v1.2</p>
<p>v1.3</p>
<p>v1.4</p>
<p>v1.5</p>
<p>v1.6</p>
<p>v1.7</p>
<p>v1.8</p>
<p>v1.9</p>
<p>v1.10</p>
<p>v1.11</p>
<p>v1.12</p>
<p>v1.13</p>
<p>v1.14</p>
<p>v1.15</p>
<p>v1.16</p>
<p>v1.17</p>
<p>v1.18</p>
<p>v1.19</p>
<p>v1.20</p>
<p>v1.21</p>
<p>v1.22</p>
<p>v1.23</p>
<p>v1.24</p>
<p>v1.25</p>
</div>
          `;
        html_code.innerText = `
<div class="scrollable_component">
  <p>v1.1</p>
  <p>v1.2</p>
  <p>v1.3</p>
  <p>v1.4</p>
  <p>v1.5</p>
  <p>v1.6</p>
  <p>v1.7</p>
  <p>v1.8</p>
  <p>v1.9</p>
  <p>v1.10</p>
  <p>v1.11</p>
  <p>v1.12</p>
  <p>v1.13</p>
  <p>v1.14</p>
  <p>v1.15</p>
  <p>v1.16</p>
  <p>v1.17</p>
  <p>v1.18</p>
  <p>v1.19</p>
  <p>v1.20</p>
  <p>v1.21</p>
  <p>v1.22</p>
  <p>v1.23</p>
  <p>v1.24</p>
  <p>v1.25</p>
</div>`;
        css_code.innerText = `
.scrollable_component {
  height: 300px;
  width: fit-content;
  overflow-y: scroll;
  p {
    width: 150px;
    color: white;
  }
}`;
        let c = document.getElementsByTagName("code");
        for (let i = 0; i < c.length; i++) {
          // Zameni <br> tagove sa novim redovima
          c[i].innerHTML = c[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(c[i]);
        }
        break;
      case "toggle":
        content_side.innerHTML = "";
        content_side_2.innerHTML = "";
        content_side_3.innerHTML = "";
        content_side_4.innerHTML = "";
        content_side_5.innerHTML = "";
        content_side_6.innerHTML = "";
        content_side_7.innerHTML = "";
        content_side_8.innerHTML = "";

        html_code.innerText = "";
        html_code_2.innerText = "";
        html_code_3.innerText = "";
        html_code_4.innerText = "";
        html_code_5.innerText = "";
        html_code_6.innerText = "";
        html_code_7.innerText = "";
        html_code_8.innerText = "";

        css_code.innerText = "";
        css_code_2.innerText = "";
        css_code_3.innerText = "";
        css_code_4.innerText = "";
        css_code_5.innerText = "";
        css_code_6.innerText = "";
        css_code_7.innerText = "";
        css_code_8.innerText = "";
        content_side.innerHTML = `
            <div class="switch_component">
<p>Airplane mode</p>
<label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label>
</div>

        `;
        html_code.innerText = `
<div class="switch_component">
  <p>Airplane mode</p>
  <label class="switch">
    <input type="checkbox" />
    <span class="slider round"></span>
  </label>
</div>`;
        css_code.innerText = `
.switch_component {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  gap: 10px;
  p {
    color: white;
  }
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  &:checked + .slider {
    background-color: #ffffff;
    &::before {
      transform: translateX(26px);
    }
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(32, 32, 32);
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: rgb(0, 0, 0);
    transition: 0.4s;
  }

  &.round {
    border-radius: 34px;
      &::before {
        border-radius: 50px;
      }
     }
    }
  }
}`;
        let cc = document.getElementsByTagName("code");
        for (let i = 0; i < cc.length; i++) {
          // Zameni <br> tagove sa novim redovima
          cc[i].innerHTML = cc[i].innerHTML.replace(/<br\s*\/?>/gi, "\n");

          // Ponovno isticanje sintakse za element

          Prism.highlightElement(cc[i]);
        }
    }
  });
}
//FREAMEWORK JS CODE
//FREAMEWORK JS CODE
//FREAMEWORK JS CODE
//FREAMEWORK JS CODE

const openDialog = () => {
  const dialog = document.querySelector(".alert_dialog_component");
  dialog.showModal();
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      closeDialog();
    }
  });
  dialog.style.animation = "fadeInScale 0.3s ease forwards";
};

const closeDialog = () => {
  const dialog = document.querySelector(".alert_dialog_component");
  dialog.close();
};
//IMAGE UPLOAD COMPONENT

//KOD STRANICE
