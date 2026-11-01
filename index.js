(function() {
  "use strict";
  const React = window.React;
  const TRANSLATIONS = {
    en: {
      tileOpen: "To-Do List — {n} open",
      tileNone: "To-Do List — no open tasks",
      closeLabel: "Close",
      todoListHeader: "To-do list",
      summary: "{open} open · {done} done",
      summaryEmpty: "Nothing to do yet",
      addTaskTitle: "Add task",
      addPlaceholder: "Add a task",
      filterAll: "All",
      filterOpen: "Open",
      filterDone: "Done",
      searchPlaceholder: "Search tasks",
      clearDone: "Clear completed",
      deleteTask: "Delete task",
      dragTask: "Drag to reorder",
      todoPlaceholder: "Task",
      emptyTitle: "No tasks yet",
      emptyBody: "Type a task above and press Enter.",
      noMatch: "No matching tasks",
      nothingOpen: "Nothing left to do",
      nothingDone: "No completed tasks"
    },
    tr: {
      tileOpen: "Yapılacaklar — {n} açık görev",
      tileNone: "Yapılacaklar — açık görev yok",
      closeLabel: "Kapat",
      todoListHeader: "Yapılacaklar",
      summary: "{open} açık · {done} tamamlandı",
      summaryEmpty: "Henüz yapılacak yok",
      addTaskTitle: "Görev ekle",
      addPlaceholder: "Görev ekle",
      filterAll: "Tümü",
      filterOpen: "Açık",
      filterDone: "Biten",
      searchPlaceholder: "Görevlerde ara",
      clearDone: "Tamamlananları temizle",
      deleteTask: "Görevi sil",
      dragTask: "Sıralamak için sürükleyin",
      todoPlaceholder: "Görev",
      emptyTitle: "Henüz görev yok",
      emptyBody: "Yukarıya bir görev yazıp Enter'a basın.",
      noMatch: "Eşleşen görev yok",
      nothingOpen: "Yapılacak bir şey kalmadı",
      nothingDone: "Tamamlanan görev yok"
    },
    de: {
      tileOpen: "Aufgaben — {n} offen",
      tileNone: "Aufgaben — nichts offen",
      closeLabel: "Schließen",
      todoListHeader: "Aufgaben",
      summary: "{open} offen · {done} erledigt",
      summaryEmpty: "Noch nichts zu tun",
      addTaskTitle: "Aufgabe hinzufügen",
      addPlaceholder: "Aufgabe hinzufügen",
      filterAll: "Alle",
      filterOpen: "Offen",
      filterDone: "Erledigt",
      searchPlaceholder: "Aufgaben suchen",
      clearDone: "Erledigte entfernen",
      deleteTask: "Aufgabe löschen",
      dragTask: "Zum Sortieren ziehen",
      todoPlaceholder: "Aufgabe",
      emptyTitle: "Noch keine Aufgaben",
      emptyBody: "Gib oben eine Aufgabe ein und drücke Enter.",
      noMatch: "Keine passenden Aufgaben",
      nothingOpen: "Nichts mehr zu erledigen",
      nothingDone: "Keine erledigten Aufgaben"
    },
    fr: {
      tileOpen: "Tâches — {n} ouverte(s)",
      tileNone: "Tâches — aucune ouverte",
      closeLabel: "Fermer",
      todoListHeader: "Liste de tâches",
      summary: "{open} ouvertes · {done} terminées",
      summaryEmpty: "Rien à faire pour l’instant",
      addTaskTitle: "Ajouter une tâche",
      addPlaceholder: "Ajouter une tâche",
      filterAll: "Toutes",
      filterOpen: "Ouvertes",
      filterDone: "Terminées",
      searchPlaceholder: "Rechercher des tâches",
      clearDone: "Effacer les terminées",
      deleteTask: "Supprimer la tâche",
      dragTask: "Glisser pour réordonner",
      todoPlaceholder: "Tâche",
      emptyTitle: "Aucune tâche pour l’instant",
      emptyBody: "Saisissez une tâche ci-dessus et appuyez sur Entrée.",
      noMatch: "Aucune tâche correspondante",
      nothingOpen: "Plus rien à faire",
      nothingDone: "Aucune tâche terminée"
    },
    es: {
      tileOpen: "Tareas — {n} abierta(s)",
      tileNone: "Tareas — ninguna abierta",
      closeLabel: "Cerrar",
      todoListHeader: "Lista de tareas",
      summary: "{open} abiertas · {done} hechas",
      summaryEmpty: "Nada por hacer todavía",
      addTaskTitle: "Añadir tarea",
      addPlaceholder: "Añadir una tarea",
      filterAll: "Todas",
      filterOpen: "Abiertas",
      filterDone: "Hechas",
      searchPlaceholder: "Buscar tareas",
      clearDone: "Borrar completadas",
      deleteTask: "Eliminar tarea",
      dragTask: "Arrastra para reordenar",
      todoPlaceholder: "Tarea",
      emptyTitle: "Aún no hay tareas",
      emptyBody: "Escribe una tarea arriba y pulsa Intro.",
      noMatch: "Ninguna tarea coincide",
      nothingOpen: "No queda nada por hacer",
      nothingDone: "No hay tareas hechas"
    },
    ru: {
      tileOpen: "Дела — открыто: {n}",
      tileNone: "Дела — открытых задач нет",
      closeLabel: "Закрыть",
      todoListHeader: "Список дел",
      summary: "Открыто: {open} · готово: {done}",
      summaryEmpty: "Пока нечего делать",
      addTaskTitle: "Добавить задачу",
      addPlaceholder: "Добавить задачу",
      filterAll: "Все",
      filterOpen: "Открытые",
      filterDone: "Готовые",
      searchPlaceholder: "Поиск задач",
      clearDone: "Очистить выполненные",
      deleteTask: "Удалить задачу",
      dragTask: "Перетащите, чтобы изменить порядок",
      todoPlaceholder: "Задача",
      emptyTitle: "Задач пока нет",
      emptyBody: "Введите задачу выше и нажмите Enter.",
      noMatch: "Подходящих задач нет",
      nothingOpen: "Больше нечего делать",
      nothingDone: "Выполненных задач нет"
    },
    ja: {
      tileOpen: "To-Do — 未完了 {n} 件",
      tileNone: "To-Do — 未完了なし",
      closeLabel: "閉じる",
      todoListHeader: "To-Do リスト",
      summary: "未完了 {open} · 完了 {done}",
      summaryEmpty: "まだやることはありません",
      addTaskTitle: "タスクを追加",
      addPlaceholder: "タスクを追加",
      filterAll: "すべて",
      filterOpen: "未完了",
      filterDone: "完了",
      searchPlaceholder: "タスクを検索",
      clearDone: "完了済みを削除",
      deleteTask: "タスクを削除",
      dragTask: "ドラッグして並べ替え",
      todoPlaceholder: "タスク",
      emptyTitle: "タスクはまだありません",
      emptyBody: "上の欄にタスクを入力して Enter を押してください。",
      noMatch: "一致するタスクはありません",
      nothingOpen: "やることはありません",
      nothingDone: "完了したタスクはありません"
    },
    zh: {
      tileOpen: "待办 — {n} 项未完成",
      tileNone: "待办 — 没有未完成项",
      closeLabel: "关闭",
      todoListHeader: "待办事项",
      summary: "{open} 项未完成 · {done} 项已完成",
      summaryEmpty: "还没有待办",
      addTaskTitle: "添加任务",
      addPlaceholder: "添加任务",
      filterAll: "全部",
      filterOpen: "未完成",
      filterDone: "已完成",
      searchPlaceholder: "搜索任务",
      clearDone: "清除已完成",
      deleteTask: "删除任务",
      dragTask: "拖动以排序",
      todoPlaceholder: "任务",
      emptyTitle: "还没有任务",
      emptyBody: "在上方输入任务并按 Enter。",
      noMatch: "没有匹配的任务",
      nothingOpen: "没有待办事项",
      nothingDone: "没有已完成的任务"
    },
    ar: {
      tileOpen: "المهام — {n} مفتوحة",
      tileNone: "المهام — لا مهام مفتوحة",
      closeLabel: "إغلاق",
      todoListHeader: "قائمة المهام",
      summary: "{open} مفتوحة · {done} مكتملة",
      summaryEmpty: "لا شيء للقيام به بعد",
      addTaskTitle: "إضافة مهمة",
      addPlaceholder: "أضف مهمة",
      filterAll: "الكل",
      filterOpen: "المفتوحة",
      filterDone: "المكتملة",
      searchPlaceholder: "بحث في المهام",
      clearDone: "مسح المكتملة",
      deleteTask: "حذف المهمة",
      dragTask: "اسحب لإعادة الترتيب",
      todoPlaceholder: "مهمة",
      emptyTitle: "لا توجد مهام بعد",
      emptyBody: "اكتب مهمة في الأعلى ثم اضغط Enter.",
      noMatch: "لا توجد مهام مطابقة",
      nothingOpen: "لا شيء متبقٍ",
      nothingDone: "لا توجد مهام مكتملة"
    },
    hi: {
      tileOpen: "कार्य — {n} खुले",
      tileNone: "कार्य — कोई खुला कार्य नहीं",
      closeLabel: "बंद करें",
      todoListHeader: "टू-डू सूची",
      summary: "{open} खुले · {done} पूरे",
      summaryEmpty: "अभी करने के लिए कुछ नहीं",
      addTaskTitle: "कार्य जोड़ें",
      addPlaceholder: "कार्य जोड़ें",
      filterAll: "सभी",
      filterOpen: "खुले",
      filterDone: "पूरे",
      searchPlaceholder: "कार्य खोजें",
      clearDone: "पूरे किए गए हटाएं",
      deleteTask: "कार्य हटाएं",
      dragTask: "क्रम बदलने के लिए खींचें",
      todoPlaceholder: "कार्य",
      emptyTitle: "अभी कोई कार्य नहीं",
      emptyBody: "ऊपर कार्य लिखें और Enter दबाएं।",
      noMatch: "कोई मेल खाता कार्य नहीं",
      nothingOpen: "करने के लिए कुछ नहीं बचा",
      nothingDone: "कोई पूरा कार्य नहीं"
    }
  };
  const STORAGE_KEY = "kobar_plugin_todos";
  const TODO_BTN_ID = "todolist-plugin-btn";
  const PANEL_W = 340;
  const SEARCH_FROM = 8;
  const ICON_FONT = "'Material Symbols Rounded', 'Material Symbols Outlined'";
  const iconStyle = (size, fill = 0) => ({
    fontFamily: ICON_FONT,
    fontVariationSettings: `'FILL' ${fill}, 'wght' 400`,
    fontSize: size,
    lineHeight: 1
  });
  const Icon = ({ name, size = 20, fill = 0, style }) => /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", "aria-hidden": "true", style: { ...iconStyle(size, fill), ...style } }, name);
  const C = {
    shell: "var(--kb-bg-shell, var(--theme-bg-dark, #1b1e27))",
    tile: "var(--kb-bg-tile, var(--theme-surface, #242833))",
    inset: "var(--kb-bg-inset, rgba(255,255,255,0.06))",
    container: "var(--kb-bg-container, var(--theme-accent-glow, rgba(99,102,241,0.18)))",
    onContainer: "var(--kb-on-container, #f2f3f7)",
    accent: "var(--kb-accent, var(--theme-primary, #8b9cff))",
    onAccent: "var(--kb-on-accent, #101218)",
    fg1: "var(--kb-fg-1, #f2f3f7)",
    fg2: "var(--kb-fg-2, #b4b8c6)",
    fg3: "var(--kb-fg-3, #868b9b)",
    line: "var(--kb-stroke-subtle, rgba(255,255,255,0.12))",
    control: "var(--kb-stroke-control, rgba(255,255,255,0.3))",
    display: "var(--kb-font-display, inherit)"
  };
  const getLang = () => window.useAppStore?.getState?.().language || "en";
  const dictFor = (lang) => TRANSLATIONS[lang] || TRANSLATIONS.en;
  const tr = (lang, key) => dictFor(lang)[key] || TRANSLATIONS.en[key] || key;
  const fmtNum = (lang, n) => {
    try {
      return new Intl.NumberFormat(lang).format(n);
    } catch (e) {
      return String(n);
    }
  };
  const barExt = () => {
    const ext = window.KoBarExtensions;
    return typeof ext?.setBarItemState === "function" ? ext : null;
  };
  let barLocale = null;
  const readTodos = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
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
      const lang = barLocale || getLang();
      const open = todos.filter((x) => !x.completed).length;
      ext.setBarItemState(TODO_BTN_ID, {
        label: tr(lang, open > 0 ? "tileOpen" : "tileNone").replace("{n}", fmtNum(lang, open)),
        badge: open,
        icon: todos.length > 0 && open === 0 ? "task_alt" : "checklist"
      });
    } catch (e) {
    }
  };
  const TD_CSS = `
.td-panel button{cursor:pointer;border:0;font-family:inherit}
.td-panel button:disabled{cursor:not-allowed}
.td-panel input{font-family:inherit}
.td-panel :is(button,input,[role=checkbox]):focus-visible{outline:2px solid var(--kb-accent, var(--theme-primary, #8b9cff));outline-offset:2px}
.td-panel .td-field:focus-within{outline:2px solid var(--kb-accent, var(--theme-primary, #8b9cff));outline-offset:0}
.td-panel .td-field input:focus-visible{outline:none}
.td-panel .td-row input:focus-visible{outline:none}
.td-panel .td-row:focus-within{box-shadow:inset 0 0 0 2px var(--kb-accent, var(--theme-primary, #8b9cff))}
.td-panel .td-row .td-act{display:none}
.td-panel .td-row:hover .td-act,.td-panel .td-row:focus-within .td-act{display:flex}
.td-panel .td-row:hover{background:color-mix(in srgb, var(--kb-fg-1, #fff) 6%, var(--kb-bg-tile, #242833))}
.td-panel .td-chip:hover{background:color-mix(in srgb, var(--kb-fg-1, #fff) 6%, transparent)}
.td-panel ::placeholder{color:var(--kb-fg-3, #868b9b);opacity:1}
.td-panel .td-scroll{scrollbar-width:thin}
`;
  const chipStyle = (selected) => ({
    height: 32,
    padding: "0 12px",
    borderRadius: 10,
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontSize: 13,
    fontWeight: 600,
    whiteSpace: "nowrap",
    background: selected ? C.container : "transparent",
    color: selected ? C.onContainer : C.fg2,
    boxShadow: selected ? "none" : `inset 0 0 0 1px ${C.control}`
  });
  const TodoListPanel = (props) => {
    const { onClose, anchorRect } = props;
    const store = window.useAppStore();
    const edgePosition = store.edgePosition;
    const screenBounds = store.screenBounds;
    const isSmartPositioning = store.isPopupSmartPositioning;
    const orientation = store.orientation;
    const sidebarPosition = store.sidebarPosition;
    const lang = store.language;
    const t = (key) => tr(lang, key);
    const [todos, setTodos] = React.useState(readTodos);
    React.useEffect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      publishTodoState(todos);
    }, [todos]);
    const [draft, setDraft] = React.useState("");
    const [filter, setFilter] = React.useState("all");
    const [query, setQuery] = React.useState("");
    const [draggedItemIndex, setDraggedItemIndex] = React.useState(null);
    const popupRef = React.useRef(null);
    const addTodo = () => {
      const text = draft.trim();
      if (!text) return;
      setTodos((prev) => [{ id: Date.now().toString(), text, completed: false }, ...prev]);
      setDraft("");
      setFilter((f) => f === "done" ? "all" : f);
    };
    const updateTodoText = (id, text) => setTodos((prev) => prev.map((x) => x.id === id ? { ...x, text } : x));
    const toggleTodo = (id) => setTodos((prev) => prev.map((x) => x.id === id ? { ...x, completed: !x.completed } : x));
    const deleteTodo = (id) => setTodos((prev) => prev.filter((x) => x.id !== id));
    const clearDone = () => setTodos((prev) => prev.filter((x) => !x.completed));
    const reorderTodos = (startIndex, endIndex) => {
      setTodos((prev) => {
        const result = Array.from(prev);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
      });
    };
    React.useEffect(() => {
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);
    const POPUP_H = 480;
    const getPopupStyle = () => {
      if (!anchorRect) return { display: "none" };
      const screenHeight = screenBounds?.height ?? 800;
      const popupHeight = Math.min(POPUP_H, screenHeight - 48);
      const screenWidth = screenBounds?.width ?? 1200;
      const offsetTop = sidebarPosition ? sidebarPosition.y : 0;
      const offsetLeft = sidebarPosition ? sidebarPosition.x : 0;
      const style = {
        position: "absolute",
        zIndex: 99999,
        backgroundColor: C.shell,
        border: `1px solid ${C.line}`,
        borderRadius: 32,
        boxShadow: "var(--kb-shadow-e3, 0 12px 32px rgba(0,0,0,0.45))",
        color: C.fg1,
        willChange: "transform, opacity",
        transitionProperty: "opacity, transform, filter",
        maxHeight: screenHeight - 48
      };
      const screenXInViewport = (screenBounds?.x ?? 0) - window.screenX;
      const screenYInViewport = (screenBounds?.y ?? 0) - window.screenY;
      if (orientation === "horizontal") {
        let adjustedLeft = anchorRect.left - offsetLeft + anchorRect.width / 2 - PANEL_W / 2;
        const maxLeft = screenXInViewport + (screenWidth - offsetLeft) - PANEL_W - 20;
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
        const screenXInViewport = (screenBounds?.x ?? 0) - window.screenX;
        const screenYInViewport = (screenBounds?.y ?? 0) - window.screenY;
        if (orientation === "horizontal") {
          const screenWidth = screenBounds?.width ?? 1200;
          let adjustedLeft = anchorRect.left - newX + anchorRect.width / 2 - PANEL_W / 2;
          const maxLeft = screenXInViewport + (screenWidth - newX) - PANEL_W - 20;
          const minLeft = screenXInViewport - newX + 20;
          if (adjustedLeft < minLeft) adjustedLeft = minLeft;
          if (adjustedLeft > maxLeft) adjustedLeft = maxLeft;
          popupRef.current.style.left = `${adjustedLeft}px`;
        } else {
          const screenHeight = screenBounds?.height ?? 800;
          const popupHeight = Math.min(POPUP_H, screenHeight - 48);
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
    const total = todos.length;
    const doneCount = todos.filter((x) => x.completed).length;
    const openCount = total - doneCount;
    const progress = total === 0 ? 0 : doneCount / total;
    const showSearch = total >= SEARCH_FROM;
    const q = showSearch ? query.trim().toLowerCase() : "";
    const canReorder = filter === "all" && !q;
    const visible = [];
    todos.forEach((todo, index) => {
      if (filter === "open" && todo.completed) return;
      if (filter === "done" && !todo.completed) return;
      if (q && !String(todo.text || "").toLowerCase().includes(q)) return;
      visible.push({ todo, index });
    });
    const handleDragStart = (e, index) => {
      setDraggedItemIndex(index);
      const row = e.currentTarget.closest(".td-row");
      if (row && e.dataTransfer.setDragImage) e.dataTransfer.setDragImage(row, 10, row.clientHeight / 2);
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", index.toString());
    };
    const handleDragEnter = (e, index) => {
      e.preventDefault();
      if (draggedItemIndex === null || draggedItemIndex === index) return;
      reorderTodos(draggedItemIndex, index);
      setDraggedItemIndex(index);
    };
    const handleDragEnd = () => setDraggedItemIndex(null);
    const chips = [
      { id: "all", label: t("filterAll"), n: total },
      { id: "open", label: t("filterOpen"), n: openCount },
      { id: "done", label: t("filterDone"), n: doneCount }
    ];
    const emptyMessage = q ? t("noMatch") : filter === "open" ? t("nothingOpen") : t("nothingDone");
    const draftReady = draft.trim().length > 0;
    return /* @__PURE__ */ window.React.createElement(
      "div",
      {
        ref: popupRef,
        className: "td-panel pointer-events-auto flex flex-col",
        role: "dialog",
        "aria-label": t("todoListHeader"),
        style: { ...getPopupStyle(), boxSizing: "border-box", width: PANEL_W, padding: 20, gap: 16, overflow: "hidden", fontFamily: "var(--kb-font, inherit)" }
      },
      /* @__PURE__ */ window.React.createElement("style", null, TD_CSS),
      /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center", style: { gap: 12, flex: "none" } }, /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center justify-center shrink-0", style: { width: 44, height: 44, borderRadius: 15, background: C.container, color: C.accent } }, /* @__PURE__ */ window.React.createElement(Icon, { name: "checklist", size: 24, fill: 1 })), /* @__PURE__ */ window.React.createElement("div", { className: "flex-1 min-w-0 drag-region" }, /* @__PURE__ */ window.React.createElement("div", { style: { fontFamily: C.display, fontSize: 19, lineHeight: "24px", fontWeight: 600 } }, t("todoListHeader")), /* @__PURE__ */ window.React.createElement("div", { style: { fontSize: 12, lineHeight: "16px", color: C.fg2, fontVariantNumeric: "tabular-nums" } }, total === 0 ? t("summaryEmpty") : t("summary").replace("{open}", fmtNum(lang, openCount)).replace("{done}", fmtNum(lang, doneCount)))), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          type: "button",
          onClick: onClose,
          "aria-label": t("closeLabel"),
          title: t("closeLabel"),
          className: "flex items-center justify-center shrink-0 no-drag-region",
          style: { width: 36, height: 36, borderRadius: 999, background: C.container, color: C.onContainer }
        },
        /* @__PURE__ */ window.React.createElement(Icon, { name: "close", size: 20 })
      )),
      /* @__PURE__ */ window.React.createElement("div", { className: "td-field flex items-center no-drag-region", style: { gap: 8, height: 48, padding: "0 4px 0 16px", borderRadius: 999, background: C.inset, flex: "none" } }, /* @__PURE__ */ window.React.createElement(
        "input",
        {
          type: "text",
          maxLength: 80,
          value: draft,
          onChange: (e) => setDraft(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTodo();
            }
          },
          placeholder: t("addPlaceholder"),
          "aria-label": t("addTaskTitle"),
          className: "flex-1 min-w-0 border-none outline-none",
          style: { background: "transparent", color: C.fg1, height: 40, fontSize: 14, border: 0 }
        }
      ), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          type: "button",
          onClick: addTodo,
          disabled: !draftReady,
          title: t("addTaskTitle"),
          "aria-label": t("addTaskTitle"),
          className: "flex items-center justify-center shrink-0",
          style: { width: 40, height: 40, borderRadius: 999, background: draftReady ? C.accent : C.container, color: draftReady ? C.onAccent : C.onContainer, opacity: draftReady ? 1 : 0.7 }
        },
        /* @__PURE__ */ window.React.createElement(Icon, { name: "add", size: 22 })
      )),
      total > 0 && /* @__PURE__ */ window.React.createElement("div", { className: "flex flex-col no-drag-region", style: { gap: 12, flex: "none" } }, /* @__PURE__ */ window.React.createElement(
        "div",
        {
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Math.round(progress * 100),
          "aria-label": t("summary").replace("{open}", fmtNum(lang, openCount)).replace("{done}", fmtNum(lang, doneCount)),
          style: { height: 4, borderRadius: 999, background: "var(--kb-ring-track, rgba(255,255,255,0.12))", overflow: "hidden" }
        },
        /* @__PURE__ */ window.React.createElement("div", { style: { height: "100%", width: `${progress * 100}%`, background: C.accent, borderRadius: 999 } })
      ), /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center", style: { gap: 6 }, role: "group" }, chips.map((c) => /* @__PURE__ */ window.React.createElement("button", { key: c.id, type: "button", className: "td-chip", "aria-pressed": filter === c.id, onClick: () => setFilter(c.id), style: chipStyle(filter === c.id) }, filter === c.id && /* @__PURE__ */ window.React.createElement(Icon, { name: "check", size: 16, fill: 1, style: { color: C.accent } }), /* @__PURE__ */ window.React.createElement("span", null, c.label), /* @__PURE__ */ window.React.createElement("span", { style: { fontVariantNumeric: "tabular-nums", opacity: 0.7 } }, fmtNum(lang, c.n)))))),
      showSearch && /* @__PURE__ */ window.React.createElement("div", { className: "td-field flex items-center no-drag-region", style: { gap: 8, height: 44, padding: "0 16px", borderRadius: 999, background: C.inset, flex: "none" } }, /* @__PURE__ */ window.React.createElement(Icon, { name: "search", size: 18, style: { color: C.fg2 } }), /* @__PURE__ */ window.React.createElement(
        "input",
        {
          type: "text",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: t("searchPlaceholder"),
          "aria-label": t("searchPlaceholder"),
          className: "flex-1 min-w-0 border-none outline-none",
          style: { background: "transparent", color: C.fg1, height: 40, fontSize: 14, border: 0 }
        }
      )),
      /* @__PURE__ */ window.React.createElement("div", { className: "td-scroll overflow-y-auto custom-scrollbar flex flex-col", style: { gap: 8, minHeight: 0, maxHeight: 320 } }, total === 0 ? /* @__PURE__ */ window.React.createElement("div", { className: "flex flex-col items-center text-center", style: { gap: 8, padding: "28px 20px", border: `2px dashed ${C.line}`, borderRadius: 28 } }, /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center justify-center", style: { width: 64, height: 64, borderRadius: 20, background: C.container, color: C.accent } }, /* @__PURE__ */ window.React.createElement(Icon, { name: "task_alt", size: 32, fill: 1 })), /* @__PURE__ */ window.React.createElement("div", { style: { fontSize: 15.5, lineHeight: "22px", fontWeight: 600, color: C.fg1 } }, t("emptyTitle")), /* @__PURE__ */ window.React.createElement("div", { style: { fontSize: 12, lineHeight: "16px", color: C.fg2 } }, t("emptyBody"))) : visible.length === 0 ? /* @__PURE__ */ window.React.createElement("div", { className: "text-center", style: { padding: "20px 16px", fontSize: 14, color: C.fg2 } }, emptyMessage) : visible.map(({ todo, index }) => /* @__PURE__ */ window.React.createElement(
        "div",
        {
          key: todo.id,
          className: "td-row flex items-center",
          style: { gap: 8, minHeight: 52, padding: "4px 8px 4px 10px", borderRadius: 16, flex: "none", background: C.tile, opacity: draggedItemIndex === index ? 0.5 : 1 },
          onDragEnter: canReorder ? (e) => handleDragEnter(e, index) : void 0,
          onDragOver: canReorder ? (e) => e.preventDefault() : void 0
        },
        /* @__PURE__ */ window.React.createElement(
          "button",
          {
            type: "button",
            role: "checkbox",
            "aria-checked": !!todo.completed,
            "aria-label": todo.text || t("todoPlaceholder"),
            onClick: () => toggleTodo(todo.id),
            className: "flex items-center justify-center no-drag-region shrink-0",
            style: { width: 28, height: 28, borderRadius: 999, background: todo.completed ? C.container : "transparent", color: C.accent, boxShadow: todo.completed ? "none" : `inset 0 0 0 2px ${C.control}` }
          },
          todo.completed && /* @__PURE__ */ window.React.createElement(Icon, { name: "check", size: 18 })
        ),
        /* @__PURE__ */ window.React.createElement(
          "input",
          {
            type: "text",
            maxLength: 80,
            value: todo.text,
            onChange: (e) => updateTodoText(todo.id, e.target.value),
            placeholder: t("todoPlaceholder"),
            "aria-label": t("todoPlaceholder"),
            className: "flex-1 min-w-0 border-none outline-none no-drag-region",
            style: { background: "transparent", border: 0, fontSize: 14, height: 36, textOverflow: "ellipsis", textDecoration: todo.completed ? "line-through" : "none", color: todo.completed ? C.fg3 : C.fg1 }
          }
        ),
        /* @__PURE__ */ window.React.createElement("div", { className: "td-act items-center shrink-0", style: { gap: 2 } }, canReorder && /* @__PURE__ */ window.React.createElement(
          "div",
          {
            draggable: true,
            onDragStart: (e) => handleDragStart(e, index),
            onDragEnd: handleDragEnd,
            title: t("dragTask"),
            "aria-label": t("dragTask"),
            className: "flex items-center justify-center no-drag-region",
            style: { width: 32, height: 32, cursor: "grab", color: C.fg2 }
          },
          /* @__PURE__ */ window.React.createElement(Icon, { name: "drag_indicator", size: 20 })
        ), /* @__PURE__ */ window.React.createElement(
          "button",
          {
            type: "button",
            onClick: () => deleteTodo(todo.id),
            title: t("deleteTask"),
            "aria-label": t("deleteTask"),
            className: "flex items-center justify-center no-drag-region",
            style: { width: 32, height: 32, borderRadius: 999, background: "transparent", color: C.fg2 }
          },
          /* @__PURE__ */ window.React.createElement(Icon, { name: "delete", size: 20 })
        ))
      ))),
      doneCount > 0 && /* @__PURE__ */ window.React.createElement("div", { className: "flex justify-end no-drag-region", style: { flex: "none", marginTop: -4 } }, /* @__PURE__ */ window.React.createElement(
        "button",
        {
          type: "button",
          onClick: clearDone,
          className: "td-chip flex items-center",
          style: { height: 32, padding: "0 14px", gap: 6, borderRadius: 999, background: "transparent", color: C.fg1, fontSize: 13, fontWeight: 600 }
        },
        /* @__PURE__ */ window.React.createElement(Icon, { name: "delete_sweep", size: 18 }),
        t("clearDone")
      ))
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
