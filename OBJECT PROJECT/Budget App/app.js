class UI{
    constructor(){
        this.budgetFeedback = document.querySelector(".budget-feedback");
        this.expenseFeedback = document.querySelector(".expense-feedback");
        this.budgetForm = document.getElementById("budget-form");
        this.budgetInput = document.getElementById("budget-input");
        this.budgetAmount = document.getElementById("budget-amount");
        this.expenseAmount = document.getElementById("expense-amount");
        this.balance = document.getElementById("balance");
        this.balanceAmount = document.getElementById("balance-amount");
        this.expenseForm = document.getElementById("expense-form");
        this.expenseInput = document.getElementById("expense-input");
        this.amountInput = document.getElementById("amount-input");
        this.expenseList = document.getElementById("expense-list");
        this.itemList = [];
        this.itemID = 0;
    
    }

    //Submit budget method
    submitBudgetForm(){
        const value = this.budgetInput.value;
        if(value === '' || value < 0){
            this.budgetFeedback.classList.add('showItem');
            this.budgetFeedback.innerHTML = `<p>Enter valid Values! Values can't be Empty Or Negative!</p>`;
            const self = this;
            setTimeout(function(){
                self.budgetFeedback.classList.remove('showItem')
            }, 4000);
        }else{
            this.budgetAmount.textContent = value;
            this.budgetInput.value ='';
            this.showBalance();
        }
    }
    //show balance
    showBalance(){
        const expense = this.totalExpense()
        const total = parseInt(this.budgetAmount.textContent) - expense;
        this.balanceAmount.textContent = total;
        if(total < 0){
            this.balance.classList.remove('showGreen', 'showBlack');
            this.balance.classList.add('showRed');
        }else if(total > 0){
            this.balance.classList.remove('showRed', 'showBlack');
            this.balance.classList.add('showGreen');
        }else if(total === 0){
            this.balance.classList.remove('showRed', 'showGreen');
            this.balance.classList.add('showBack');
        }

    }

    //submit Expense Form
    submitExpenseForm(){
        const expenseValue = this.expenseInput.value;
        const amountValue = this.amountInput.value;
        //console.log(expenseValue);
        //console.log(amountValue);

        if(expenseValue === '' || amountValue === '' || amountValue < 0){
            this.expenseFeedback.classList.add('showItem');
            this.expenseFeedback.innerHTML = 'Don\'t accept empty or negative values';
            let self = this;
            setTimeout(function(){
                self.expenseFeedback.classList.remove('showItem');
            }, 4000);
        }else{
            let amount = parseInt(amountValue);
            console.log(amount);
            this.expenseInput.value = '';
            this.amountInput.value = '';

            let expense = {
                id: this.itemID,
                title: expenseValue,
                amount: amount,
            }
            

            this.itemID++;
            this.itemList.push(expense);
            this.addExpense(expense);
            //show balance
            this.showBalance();
        }
    }

    //add expense
    addExpense(expense){
        const div = document.createElement('div');
        div.classList.add('expense');
        //console.log(div);
        div.innerHTML = `
            <div class="expense-item d-flex justify-content-between align-items-baseline">
                <h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
                <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

                <div class="expense-icons list-item">

                <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
                <i class="fas fa-edit"></i>
                </a>
                <a href="#" class="delete-icon" data-id="${expense.id}">
                <i class="fas fa-trash"></i>
                </a>
                </div>
            </div>
        `;
        this.expenseList.appendChild(div);
    }


    //total expense
    totalExpense(){
        let total = 0;
        if(this.itemList.length > 0){
            total = this.itemList.reduce(function(acc, curr){
                //console.log(`Total is ${acc} the current value is ${curr.amount}`);
                acc += curr.amount;
                return acc;
            }, 0);
        }
        this.expenseAmount.textContent = total
        return total;
    }
    //edit expense
    editExpense(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement.parentElement;
        //remove from dom
        this.expenseList.removeChild(parent);
        //remove from the list
        let expense = this.itemList.filter(function(item){
            return item.id === id;
        });
        //show value
        this.expenseInput.value = expense[0].title;
        this.amountInput.value = expense[0].amount;

         //remove from the list
         let tempList = this.itemList.filter(function(item){
             return item.id !== id;
         });
         this.itemList = tempList;
         this.showBalance();
    }

    //delete expense
    deleteExpense(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement.parentElement;
        //remove from dom
        this.expenseList.removeChild(parent);
        //remove from the list
        
        let tempList = this.itemList.filter(function(item){
            return item.id !== id;
        });
        this.itemList = tempList;
        this.showBalance();

    }



}


function eventListeners(){
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    //new instance of the UI class
    const ui = new UI();

    //Budget form sumit
    budgetForm.addEventListener('submit', function(e){
        e.preventDefault();
        ui.submitBudgetForm();
        
    });

    //expense form sumit
    expenseForm.addEventListener('submit', function(e){
        e.preventDefault();
        ui.submitExpenseForm();
        
    });

    //expense click
    expenseList.addEventListener('click', function(e){
        if(e.target.parentElement.classList.contains('edit-icon')){
            ui.editExpense(e.target.parentElement);
        }else if(e.target.parentElement.classList.contains('delete-icon')){
            ui.deleteExpense(e.target.parentElement);
        }
        
    });


}

document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
});