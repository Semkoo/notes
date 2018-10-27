Regex to keep in mind
------

<dl>
  <dt>Single Email</dt>
  <dd>Example: someone@email.com <br />
  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/i</dd>

  <dt>Multiple Email</dt>
  <dd>Example: someone@email.com,someone1@email.com,... <br />
  /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;,.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/
  </dd>
  
  <dt>Number's Only Input</dt>
  <dd>Example: 
  ```javascript
  <input type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');">
  ```
  <br />
  /[^0-9.]/g
  </dd>
  
</dl>
