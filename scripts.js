// FAQ Toggle - contato.html
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');
            });
        });
    }

    // Product Image Change - produto.html
    window.changeImage = function(element) {
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            mainImage.src = element.src;
            
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            
            element.classList.add('active');
        }
    };

    // Quantity Controls - produto.html
    window.increaseQuantity = function() {
        const quantityInput = document.getElementById('quantity');
        if (quantityInput) {
            let quantity = parseInt(quantityInput.value);
            quantityInput.value = quantity + 1;
        }
    };

    window.decreaseQuantity = function() {
        const quantityInput = document.getElementById('quantity');
        if (quantityInput) {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantityInput.value = quantity - 1;
            }
        }
    };

    // Resume Upload - trabalhe.html
    const resumeUpload = document.getElementById('resumeUpload');
    const resumeInput = document.getElementById('resumeInput');
    const selectedFile = document.getElementById('selectedFile');
    
    if (resumeUpload && resumeInput) {
        resumeUpload.addEventListener('click', () => {
            resumeInput.click();
        });
        
        resumeInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                selectedFile.textContent = `Arquivo selecionado: ${file.name}`;
            }
        });
    }
    
    // CPF Formatting - trabalhe.html
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            
            if (value.length > 9) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            } else if (value.length > 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
            } else if (value.length > 3) {
                value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
            }
            
            e.target.value = value;
        });
    }
    
    // Phone Formatting - trabalhe.html
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            
            if (value.length > 10) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/(\d{0,2})/, '($1');
            }
            
            e.target.value = value;
        });
    }
    
    // Careers Form Submission - trabalhe.html
    const careersForm = document.getElementById('careersForm');
    if (careersForm) {
        careersForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Candidatura enviada com sucesso! (Esta é apenas uma demonstração frontend)');
        });
    }

    // Product Condition Selection - vender.html
    const conditionOptions = document.querySelectorAll('.condition-option');
    if (conditionOptions.length > 0) {
        conditionOptions.forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.condition-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                option.classList.add('selected');
                const productCondition = document.getElementById('productCondition');
                if (productCondition) {
                    productCondition.value = option.getAttribute('data-condition');
                }
            });
        });
    }

    // Image Upload Preview - vender.html
    const imageUpload = document.getElementById('imageUpload');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    
    if (imageUpload && imageInput) {
        imageUpload.addEventListener('click', () => {
            imageInput.click();
        });
        
        imageInput.addEventListener('change', (e) => {
            const files = e.target.files;
            
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                
                if (!file.type.match('image.*')) continue;
                
                const reader = new FileReader();
                
                reader.onload = (e) => {
                    const previewItem = document.createElement('div');
                    previewItem.className = 'preview-item';
                    
                    const img = document.createElement('img');
                    img.className = 'preview-image';
                    img.src = e.target.result;
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'remove-image';
                    removeBtn.innerHTML = '×';
                    removeBtn.addEventListener('click', () => {
                        previewItem.remove();
                    });
                    
                    previewItem.appendChild(img);
                    previewItem.appendChild(removeBtn);
                    if (imagePreview) {
                        imagePreview.appendChild(previewItem);
                    }
                };
                
                reader.readAsDataURL(file);
            }
            
            imageInput.value = '';
        });
    }

    // Sell Form Submission - vender.html
    const sellForm = document.getElementById('sellForm');
    if (sellForm) {
        sellForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Formulário enviado com sucesso! (Esta é apenas uma demonstração frontend)');
        });
    }
});
