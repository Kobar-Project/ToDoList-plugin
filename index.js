(function() {
  "use strict";
  const React = window.React;
  const TRANSLATIONS = {
    en: {
      tileOpen: "To-Do List — {n} open",
      tileNone: "To-Do List — no open tasks",
      closeLabel: "Close",
      todoListHeader: "To-Do List",
      addTaskTitle: "Add Task",
      todoEmptyState: "All caught up! Add a task to start.",
      todoPlaceholder: "New task..."
    },
    tr: {
      tileOpen: "Yapılacaklar — {n} açık görev",
      tileNone: "Yapılacaklar — açık görev yok",
      closeLabel: "Kapat",
      todoListHeader: "Yapılacaklar Listesi",
      addTaskTitle: "Görev Ekle",
      todoEmptyState: "Hepsi tamam! Başlamak için bir görev ekleyin.",
      todoPlaceholder: "Yeni görev..."
    },
    de: {
      tileOpen: "Aufgaben — {n} offen",
      tileNone: "Aufgaben — nichts offen",
      closeLabel: "Schließen",
      todoListHeader: "To-Do-Liste",
      addTaskTitle: "Aufgabe hinzufügen",
      todoEmptyState: "Alles erledigt!",
      todoPlaceholder: "Neue Aufgabe..."
    },
    fr: {
      tileOpen: "Tâches — {n} ouverte(s)",
      tileNone: "Tâches — aucune ouverte",
      closeLabel: "Fermer",
      todoListHeader: "Liste de tâches",
      addTaskTitle: "Ajouter une tâche",
      todoEmptyState: "Tout est fait ! Ajoutez une tâche pour commencer.",
      todoPlaceholder: "Nouvelle tâche..."
    },
    es: {
      tileOpen: "Tareas — {n} abierta(s)",
      tileNone: "Tareas — ninguna abierta",
      closeLabel: "Cerrar",
      todoListHeader: "Lista de tareas",
      addTaskTitle: "Añadir tarea",
      todoEmptyState: "¡Todo al día! Añade una tarea para empezar.",
      todoPlaceholder: "Nueva tarea..."
    },
    ru: {
      tileOpen: "Дела — открыто: {n}",
      tileNone: "Дела — открытых задач нет",
      closeLabel: "Закрыть",
      todoListHeader: "Список дел",
      addTaskTitle: "Добавить задачу",
      todoEmptyState: "Всё готово! Добавьте задачу, чтобы начать.",
      todoPlaceholder: "Новая задача..."
    },
    ja: {
      tileOpen: "To-Do — 未完了 {n} 件",
      tileNone: "To-Do — 未完了なし",
      closeLabel: "閉じる",
      todoListHeader: "To-Do リスト",
      addTaskTitle: "タスクを追加",
      todoEmptyState: "すべて完了！タスクを追加して始めましょう。",
      todoPlaceholder: "新しいタスク..."
    },
    zh: {
      tileOpen: "待办 — {n} 项未完成",
      tileNone: "待办 — 没有未完成项",
      closeLabel: "关闭",
      todoListHeader: "待办事项列表",
      addTaskTitle: "添加任务",
      todoEmptyState: "全部完成！添加一个任务开始吧。",
      todoPlaceholder: "新任务..."
    },
    ar: {
      tileOpen: "المهام — {n} مفتوحة",
      tileNone: "المهام — لا مهام مفتوحة",
      closeLabel: "إغلاق",
      todoListHeader: "قائمة المهام",
      addTaskTitle: "إضافة مهمة",
      todoEmptyState: "تم إنجاز كل شيء! أضف مهمة للبدء.",
      todoPlaceholder: "مهمة جديدة..."
    },
    hi: {
      tileOpen: "कार्य — {n} खुले",
      tileNone: "कार्य — कोई खुला कार्य नहीं",
      closeLabel: "बंद करें",
      todoListHeader: "टू-डू सूची",
      addTaskTitle: "कार्य जोड़ें",
      todoEmptyState: "सब पूरा हो गया! शुरू करने के लिए एक कार्य जोड़ें।",
      todoPlaceholder: "नया कार्य..."
    }
  };
  const ICON_FONT = "'Material Symbols Rounded', 'Material Symbols Outlined'";
  const iconStyle = (fill, size) => ({
    fontFamily: ICON_FONT,
    fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400`,
    fontSize: size
  });
  const TODO_BTN_ID = "todolist-plugin-btn";
  const barExt = () => {
    const ext = window.KoBarExtensions;
    return typeof ext?.setBarItemState === "function" ? ext : null;
  };
  let barLocale = null;
  const tileText = (key, n) => {
    const lang = barLocale || window.useAppStore?.getState?.().language || "en";
    const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];
    return (dict[key] || TRANSLATIONS.en[key]).replace("{n}", new Intl.NumberFormat(lang).format(n));
  };
  const readTodos = () => {
    try {
      const saved = localStorage.getItem("kobar_plugin_todos");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  };
  const publishTodoState = (todos) => {
    const ext = barExt();
    if (!ext) return;
    try {
      const open = todos.filter((x) => !x.completed).length;
      ext.setBarItemState(TODO_BTN_ID, {
        label: tileText(open > 0 ? "tileOpen" : "tileNone", open),
        badge: open,
        icon: "checklist"
      });
    } catch (e) {
    }
  };
  const TodoListPanel = (props) => {
    const { onClose, anchorRect } = props;
    const store = window.useAppStore();
    const edgePosition = store.edgePosition;
    store.design;
    store.isMac;
    store.glassOpacity;
    const screenBounds = store.screenBounds;
    const isSmartPositioning = store.isPopupSmartPositioning;
    const orientation = store.orientation;
    const sidebarPosition = store.sidebarPosition;
    const currentLang = store.language;
    const t = (key) => {
      const langDict = TRANSLATIONS[currentLang] || TRANSLATIONS["en"];
      return langDict[key] || key;
    };
    const [todos, setTodos] = React.useState(() => {
      const saved = localStorage.getItem("kobar_plugin_todos");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return [];
        }
      }
      return [];
    });
    React.useEffect(() => {
      localStorage.setItem("kobar_plugin_todos", JSON.stringify(todos));
      publishTodoState(todos);
    }, [todos]);
    const addTodo = () => {
      setTodos([{ id: Date.now().toString(), text: "", completed: false }, ...todos]);
    };
    const updateTodoText = (id, text) => {
      setTodos(todos.map((t2) => t2.id === id ? { ...t2, text } : t2));
    };
    const toggleTodo = (id) => {
      setTodos(todos.map((t2) => t2.id === id ? { ...t2, completed: !t2.completed } : t2));
    };
    const deleteTodo = (id) => {
      setTodos(todos.filter((t2) => t2.id !== id));
    };
    const reorderTodos = (startIndex, endIndex) => {
      const result = Array.from(todos);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      setTodos(result);
    };
    const [draggedItemIndex, setDraggedItemIndex] = React.useState(null);
    const popupRef = React.useRef(null);
    const getPopupStyle = () => {
      if (!anchorRect) return { display: "none" };
      const popupHeight = 300;
      const popupWidth = 320;
      const screenHeight = screenBounds?.height ?? 800;
      const screenWidth = screenBounds?.width ?? 1200;
      const offsetTop = sidebarPosition ? sidebarPosition.y : 0;
      const offsetLeft = sidebarPosition ? sidebarPosition.x : 0;
      const style = {
        position: "absolute",
        zIndex: 99999,
        backgroundColor: "var(--kb-bg-shell, var(--theme-bg-dark, #1b1e27))",
        border: "1px solid var(--kb-stroke-subtle, var(--theme-border, rgba(255,255,255,0.1)))",
        borderRadius: 32,
        boxShadow: "var(--kb-shadow-e3, 0 12px 32px rgba(0,0,0,0.45))",
        color: "var(--kb-fg-1, #f2f3f7)",
        willChange: "transform, opacity",
        transitionProperty: "opacity, transform, filter"
      };
      const screenXInViewport = (screenBounds?.x ?? 0) - window.screenX;
      const screenYInViewport = (screenBounds?.y ?? 0) - window.screenY;
      if (orientation === "horizontal") {
        let adjustedLeft = anchorRect.left - offsetLeft + anchorRect.width / 2 - popupWidth / 2;
        const maxLeft = screenXInViewport + (screenWidth - offsetLeft) - popupWidth - 20;
        const minLeft = screenXInViewport - offsetLeft + 20;
        if (adjustedLeft < minLeft) adjustedLeft = minLeft;
        if (adjustedLeft > maxLeft) adjustedLeft = maxLeft;
        if (!isSmartPositioning) {
          style.left = "50%";
          style.transform = "translateX(-50%)";
        } else {
          style.left = adjustedLeft;
        }
        if (edgePosition === "top") {
          style.top = "100%";
          style.marginTop = "12px";
        } else {
          style.bottom = "100%";
          style.marginBottom = "12px";
        }
      } else {
        let adjustedTop = anchorRect.top - offsetTop - 20 + anchorRect.height / 2 - popupHeight / 2;
        const maxTop = screenYInViewport + (screenHeight - offsetTop) - popupHeight - 20;
        const minTop = screenYInViewport - offsetTop + 20;
        if (adjustedTop < minTop) adjustedTop = minTop;
        if (adjustedTop > maxTop) adjustedTop = maxTop;
        if (!isSmartPositioning) {
          style.top = "50%";
          style.transform = "translateY(-50%)";
        } else {
          style.top = adjustedTop;
        }
        if (edgePosition === "left") {
          style.left = "100%";
          style.marginLeft = "12px";
        } else {
          style.right = "100%";
          style.marginRight = "12px";
        }
      }
      return style;
    };
    const isSmartRef = React.useRef(isSmartPositioning);
    React.useEffect(() => {
      isSmartRef.current = isSmartPositioning;
    }, [isSmartPositioning]);
    React.useEffect(() => {
      const onDrag = (e) => {
        if (!popupRef.current || !anchorRect || !isSmartRef.current) return;
        const newX = e.detail.x;
        const newY = e.detail.y;
        const popupHeight = 300;
        const popupWidth = 320;
        const screenXInViewport = (screenBounds?.x ?? 0) - window.screenX;
        const screenYInViewport = (screenBounds?.y ?? 0) - window.screenY;
        if (orientation === "horizontal") {
          const screenWidth = screenBounds?.width ?? 1200;
          let adjustedLeft = anchorRect.left - newX + anchorRect.width / 2 - popupWidth / 2;
          const maxLeft = screenXInViewport + (screenWidth - newX) - popupWidth - 20;
          const minLeft = screenXInViewport - newX + 20;
          if (adjustedLeft < minLeft) adjustedLeft = minLeft;
          if (adjustedLeft > maxLeft) adjustedLeft = maxLeft;
          popupRef.current.style.left = `${adjustedLeft}px`;
        } else {
          const screenHeight = screenBounds?.height ?? 800;
          let adjustedTop = anchorRect.top - newY - 20 + anchorRect.height / 2 - popupHeight / 2;
          const maxTop = screenYInViewport + (screenHeight - newY) - popupHeight - 20;
          const minTop = screenYInViewport - newY + 20;
          if (adjustedTop < minTop) adjustedTop = minTop;
          if (adjustedTop > maxTop) adjustedTop = maxTop;
          popupRef.current.style.top = `${adjustedTop}px`;
        }
      };
      document.addEventListener("kobar-drag", onDrag);
      return () => document.removeEventListener("kobar-drag", onDrag);
    }, [anchorRect, screenBounds, orientation]);
    const completedCount = todos.filter((t2) => t2.completed).length;
    const progress = todos.length === 0 ? 0 : completedCount / todos.length * 100;
    const handleDragStart = (e, index) => {
      setDraggedItemIndex(index);
      const row = e.currentTarget.closest(".todo-item");
      if (row && e.dataTransfer.setDragImage) {
        e.dataTransfer.setDragImage(row, 10, row.clientHeight / 2);
      }
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", index.toString());
      setTimeout(() => {
        if (row instanceof HTMLElement) {
          row.style.opacity = "0.4";
        }
      }, 0);
    };
    const handleDragEnter = (e, index) => {
      e.preventDefault();
      if (draggedItemIndex === null || draggedItemIndex === index) return;
      reorderTodos(draggedItemIndex, index);
      setDraggedItemIndex(index);
    };
    const handleDragEnd = (e) => {
      setDraggedItemIndex(null);
      const row = e.currentTarget.closest(".todo-item");
      if (row instanceof HTMLElement) {
        row.style.opacity = "1";
      }
    };
    const tileBg = "var(--kb-bg-tile, var(--theme-surface, #242833))";
    return /* @__PURE__ */ window.React.createElement(
      "div",
      {
        ref: popupRef,
        className: "pointer-events-auto overflow-hidden flex flex-col",
        style: { ...getPopupStyle(), width: 320, padding: 20, gap: 16 }
      },
      /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center", style: { gap: 12 } }, /* @__PURE__ */ window.React.createElement(
        "div",
        {
          className: "flex items-center justify-center shrink-0",
          style: { width: 44, height: 44, borderRadius: 15, background: "var(--kb-bg-container, var(--theme-accent-glow, rgba(99,102,241,0.18)))", color: "var(--kb-accent, var(--theme-primary, #8b9cff))" }
        },
        /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(true, 24) }, "checklist")
      ), /* @__PURE__ */ window.React.createElement("div", { className: "flex-1 min-w-0 drag-region" }, /* @__PURE__ */ window.React.createElement("div", { style: { fontFamily: "var(--kb-font-display, inherit)", fontSize: 19, fontWeight: 600, lineHeight: 1.2 }, className: "truncate" }, t("todoListHeader")), /* @__PURE__ */ window.React.createElement("div", { style: { fontSize: 12, color: "var(--kb-fg-2, #b4b8c6)", fontVariantNumeric: "tabular-nums" } }, completedCount, " / ", todos.length)), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          onClick: onClose,
          "aria-label": t("closeLabel"),
          title: t("closeLabel"),
          className: "flex items-center justify-center shrink-0 no-drag-region",
          style: { width: 36, height: 36, borderRadius: 999, background: "var(--kb-bg-inset, rgba(255,255,255,0.06))", color: "var(--kb-fg-1, #f2f3f7)" }
        },
        /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(false, 20) }, "close")
      )),
      /* @__PURE__ */ window.React.createElement(
        "button",
        {
          onClick: addTodo,
          title: t("addTaskTitle"),
          className: "flex items-center justify-center no-drag-region",
          style: { height: 44, borderRadius: 999, gap: 8, background: "var(--kb-accent, var(--theme-primary, #8b9cff))", color: "var(--kb-on-accent, #101218)", fontWeight: 600, fontSize: 14 }
        },
        /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(false, 20) }, "add"),
        t("addTaskTitle")
      ),
      /* @__PURE__ */ window.React.createElement(
        "div",
        {
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Math.round(progress),
          style: { height: 4, borderRadius: 999, background: "var(--kb-bg-inset, rgba(255,255,255,0.08))", overflow: "hidden" }
        },
        /* @__PURE__ */ window.React.createElement("div", { style: { height: "100%", width: `${progress}%`, background: "var(--kb-accent, var(--theme-primary, #8b9cff))", borderRadius: 999 } })
      ),
      /* @__PURE__ */ window.React.createElement("div", { className: "overflow-y-auto custom-scrollbar flex flex-col", style: { gap: 8, maxHeight: 320 } }, todos.length === 0 ? /* @__PURE__ */ window.React.createElement("div", { className: "text-center text-sm", style: { color: "var(--kb-fg-2, #b4b8c6)", margin: "24px 0" } }, t("todoEmptyState")) : todos.map((todo, index) => /* @__PURE__ */ window.React.createElement(
        "div",
        {
          key: todo.id,
          className: "todo-item flex items-center",
          style: { gap: 8, minHeight: 48, padding: "4px 8px", borderRadius: 16, background: tileBg, opacity: draggedItemIndex === index ? 0.5 : 1 },
          onDragEnter: (e) => handleDragEnter(e, index),
          onDragEnd: handleDragEnd,
          onDragOver: (e) => e.preventDefault()
        },
        /* @__PURE__ */ window.React.createElement(
          "div",
          {
            draggable: true,
            onDragStart: (e) => handleDragStart(e, index),
            className: "flex items-center justify-center cursor-move no-drag-region shrink-0",
            style: { color: "var(--kb-fg-3, #868b9b)" }
          },
          /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(false, 20) }, "drag_indicator")
        ),
        /* @__PURE__ */ window.React.createElement(
          "button",
          {
            onClick: () => toggleTodo(todo.id),
            "aria-pressed": !!todo.completed,
            className: "flex items-center justify-center no-drag-region shrink-0",
            style: {
              width: 28,
              height: 28,
              borderRadius: 999,
              background: todo.completed ? "var(--kb-accent, var(--theme-primary, #8b9cff))" : "transparent",
              color: todo.completed ? "var(--kb-on-accent, #101218)" : "var(--kb-fg-3, #868b9b)",
              border: todo.completed ? "none" : "2px solid var(--kb-stroke-control, rgba(255,255,255,0.3))"
            }
          },
          todo.completed && /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(false, 18) }, "check")
        ),
        /* @__PURE__ */ window.React.createElement(
          "input",
          {
            type: "text",
            maxLength: 80,
            value: todo.text,
            onChange: (e) => updateTodoText(todo.id, e.target.value),
            placeholder: t("todoPlaceholder"),
            className: `flex-1 min-w-0 border-none outline-none text-sm no-drag-region ${todo.completed ? "line-through" : ""}`,
            style: { background: "transparent", color: todo.completed ? "var(--kb-fg-2, #b4b8c6)" : "var(--kb-fg-1, #f2f3f7)", height: 36 }
          }
        ),
        /* @__PURE__ */ window.React.createElement(
          "button",
          {
            onClick: () => deleteTodo(todo.id),
            "aria-label": t("closeLabel"),
            className: "flex items-center justify-center no-drag-region shrink-0",
            style: { width: 32, height: 32, borderRadius: 999, background: "var(--kb-bg-inset, rgba(255,255,255,0.06))", color: "var(--kb-fg-2, #b4b8c6)" }
          },
          /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(false, 18) }, "delete")
        )
      )))
    );
  };
  window.KoBarExtensions.registerSidebarButton({
    id: "todolist-plugin-btn",
    icon: "format_list_bulleted",
    label: "To-Do List",
    tile: { template: "badge", sensitive: true },
    onClick: (e, anchorRect) => {
      const store = window.useAppStore.getState();
      const isOpen = store.activeExtensionPanelId === "todolist-plugin-panel";
      store.closeAllUtilityPopups();
      if (!isOpen) {
        window.useAppStore.setState({
          activeExtensionPanelId: "todolist-plugin-panel",
          activeExtensionAnchorRect: anchorRect
        });
      } else {
        window.useAppStore.setState({
          activeExtensionPanelId: null,
          activeExtensionAnchorRect: null
        });
      }
    }
  });
  window.KoBarExtensions.registerPanel("todolist-plugin-panel", {
    id: "todolist-plugin-panel",
    render: (props) => window.React.createElement(TodoListPanel, props)
  });
  (() => {
    const ext = barExt();
    if (!ext) {
      return;
    }
    publishTodoState(readTodos());
    if (typeof ext.onBarItemChange === "function") {
      try {
        ext.onBarItemChange(TODO_BTN_ID, (c) => {
          if (c && c.locale && c.locale !== barLocale) {
            barLocale = c.locale;
            publishTodoState(readTodos());
          }
        });
      } catch (e) {
      }
    }
  })();
})();
