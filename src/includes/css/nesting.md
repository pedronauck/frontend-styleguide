```css
/* Sem nesting */
.table > thead > tr > th { … }
.table > thead > tr > td { … }

/* Com nesting */
.table > thead > tr {
  > th { … }
  > td { … }
}
```
